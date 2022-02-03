import axios from "axios";

const postScore = (playerName, playerTime, playerScore) => {
  return axios({
    method: "POST",
    url: `${process.env.REACT_APP_ENDPOINT_API}/score`,
    data: {
      user: playerName,
      time: playerTime,
      score: playerScore,
    },
  });
};

export default postScore;
