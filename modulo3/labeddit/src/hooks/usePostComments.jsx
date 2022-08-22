import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const usePostComments = (postId) =>{
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getComments = useCallback(() => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    setLoading(true);
    setError(null);
    axios
      .get(`${BASE_URL}/posts/${postId}/comments?page=1&size=99999`, {
        headers: {
            Authorization: token,
        }
      })
      .then((res) => {
        setComments(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [postId]);


  const updateComments = () => {
    setTimeout(getComments, 200);
  }

  useEffect(() => {
    getComments();
  }, [getComments]);

  return { comments, loading, error, updateComments, setError };
}
