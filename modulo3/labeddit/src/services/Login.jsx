import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";

function Login (email, password, setError) {
    
    const body = {
        email: email,
        password: password,
    }

    axios.post(`${BASE_URL}/users/login`, body).then(response => {
        localStorage.setItem("token",response.data.token)
        setError(false)
    }).catch(error => {
        console.log(error);
        setError(true)
    })
}

export default Login;