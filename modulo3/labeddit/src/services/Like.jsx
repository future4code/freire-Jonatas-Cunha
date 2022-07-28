import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function Like(id, vote) {
  const body = {
    direction: vote,
  };

  axios
    .post(`${BASE_URL}/posts/${id}/votes`, body, {
        headers: {
          Authorization: localStorage.getItem("token") || sessionStorage.getItem("token"),
        }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default Like;
