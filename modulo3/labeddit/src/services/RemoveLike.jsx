import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function RemoveLike(id, service) {

  const link = service === "post" ? `/posts/${id}/votes` : `/comments/${id}/votes`; 

  axios
    .delete(`${BASE_URL}${link}`, {
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

export default RemoveLike;
