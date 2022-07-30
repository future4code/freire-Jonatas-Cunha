import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const usePostList = (page, size) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = (page = 1, size = 20) => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        setLoading(true);
    
        axios.get(`${BASE_URL}/posts?page=${page}&size=${size}`, {
            headers: {
                Authorization: token,
            }
        })
            .then(response => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            }
            );
    }

    const updatePosts = (page, size) => {
        setTimeout(() => getPosts(page, size), 200);
    }

    useEffect(() => {
      getPosts(page, size);
    }, [page, size]);

    return { posts, loading, error, updatePosts, setError };
};