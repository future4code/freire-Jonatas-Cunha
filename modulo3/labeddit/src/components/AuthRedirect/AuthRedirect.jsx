import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export const AuthRedirect = (props) => {

    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {

    if (token !== null) {
        return navigate("/", { replace: true });

    }}, [navigate, token]);


    return props.children;
}