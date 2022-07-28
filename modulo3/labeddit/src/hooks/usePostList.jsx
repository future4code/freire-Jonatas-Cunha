import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const usePostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const getPosts = () => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        setLoading(true);
    
        axios.get(`${BASE_URL}/posts?page=1&size=20`, {
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

    const updatePosts = () => {
        setTimeout(getPosts, 1000);
    }

    useEffect(() => {
      getPosts()
    }, []);

    return { posts, loading, error, updatePosts, setError };
};