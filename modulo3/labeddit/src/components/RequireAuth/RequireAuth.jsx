import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const RequireAuth = (props) => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");

  useEffect(() => {

    if (token === null) {
      return navigate("/login", { replace: true });
    }
  }, [navigate, token]);

  return props.children;
};
