import React from "react";
import useAxios from "../../../utils/useAxios";

function Scoreboard() {
  const { res, error, loading } = useAxios({
    method: "GET",
    url: "/score",
    headers: {
      accept: "*/*",
    },
  });

  return (
    <div>
      <h1> Scoreboard </h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {error && error.message}
          {res &&
            res.map((user) => (
              <ul>
                <li>
                  {user.user} - {user.time} - {user.score}
                </li>
              </ul>
            ))}
        </div>
      )}
    </div>
  );
}

export default Scoreboard;
