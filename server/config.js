const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const pool = mysql.createPool({
  connectionLimit: 1000,
  connectTimeout: 60 * 60 * 1000,
  host: process.env.HOST, // eu-cdbr-west-02.cleardb.net
  user: process.env.USER, // b56cc3bafbfef6
  password: process.env.PASSWORD, // 0a3bae1f
  database: process.env.DATABASE, // heroku_994c25509218148
  // insecureAuth: true
});

 // mysql://b56cc3bafbfef6:0a3bae1f@eu-cdbr-west-02.cleardb.net/heroku_994c25509218148?reconnect=true



module.exports = {
  query: function () {
    var sql_args = [];
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    var callback = args[args.length - 1]; //last arg is callback
    pool.getConnection(function (err, connection) {
      if (err) {
        console.log(err);
        return callback(err);
      }
      if (args.length > 2) {
        sql_args = args[1];
      }
      connection.query(args[0], sql_args, function (err, results) {
        connection.release(); // always put connection back in pool after last query
        if (err) {
          console.log(err);
          return callback(err);
        }
        callback(null, results);
      });
    });
  },
};