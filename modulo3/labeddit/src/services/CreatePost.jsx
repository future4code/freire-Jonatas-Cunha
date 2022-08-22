import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function CreatePost(title, resBody, setTitle, setBody, updatePosts, setErrorPost, setSucessPost) {
  const body = {
    title: title,
    body: resBody,
  };

  axios
    .post(`${BASE_URL}/posts`, body, {
        headers: {
            Authorization: localStorage.getItem("token") || sessionStorage.getItem("token"),
        }
    })
    .then((response) => {
      setTitle("");
      setBody("");
      updatePosts();
      setSucessPost(true);
      setErrorPost(false);
    })
    .catch((error) => {
      setErrorPost(true);
      setSucessPost(false);
    });
}

export default CreatePost;