import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { EmailChecker } from "../utils/EmailChecker";
import { PasswordChecker } from "../utils/PasswordChecker";

function Login(
  email,
  password,
  setError,
  setLogged,
  remember,
  setInvalidEmail,
  setInvalidPassword,
  setLoading,
) {

  const emailError = EmailChecker(email, setInvalidEmail, setLoading);
  const passwordError = PasswordChecker(password, setInvalidPassword, setLoading);

  const body = {
    email: email,
    password: password,
  };

  if (!emailError && !passwordError) {
    axios
      .post(`${BASE_URL}/users/login`, body)
      .then((response) => {
        if (remember) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        setError(false);
        setLogged(true);
        setLoading(0);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setLoading(0);
      });
  }
}

export default Login;
