import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function CreateComment(comment, postId, setComment, updateComments, setErrorComment, setSucessComment) {
  const body = {
    body: comment,
  };

  axios
    .post(`${BASE_URL}/posts/${postId}/comments`, body, {
        headers: {
            Authorization: localStorage.getItem("token") || sessionStorage.getItem("token"),
        }
    })
    .then((response) => {
      setComment("");
      updateComments();
      setSucessComment(true);
      setErrorComment(false);
    })
    .catch((error) => {
      setErrorComment(true);
      setSucessComment(false);
    });
}

export default CreateComment;