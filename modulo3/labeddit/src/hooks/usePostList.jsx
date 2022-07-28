import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

export const usePostList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");

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
    }, []);

    return { posts, loading, error };
};