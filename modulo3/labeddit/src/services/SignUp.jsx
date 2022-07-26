import axios from "axios";

import { BASE_URL } from "../constants/BASE_URL";
import { EmailChecker } from "../utils/EmailChecker";
import { PasswordChecker } from "../utils/PasswordChecker";

function SignUp(
  email,
  password,
  username,
  setError,
  setLogged,
  remember,
  setInvalidEmail,
  setInvalidPassword,
) {
  const emailError = EmailChecker(email, setInvalidEmail);
  const passwordError = PasswordChecker(password, setInvalidPassword);

  const body = {
    username: username,
    email: email,
    password: password,
  };

  if (!emailError && !passwordError && !confirmPasswordError) {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((response) => {
        if (remember) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        setError(false);
        setLogged(true);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  }
}