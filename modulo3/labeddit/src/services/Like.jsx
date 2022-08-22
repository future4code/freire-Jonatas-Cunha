import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function Like(id, vote, service) {
  const body = {
    direction: vote,
  };

  const link = service === "post" ? `/posts/${id}/votes` : `/comments/${id}/votes`;

  axios
    .post(`${BASE_URL}${link}`, body, {
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
