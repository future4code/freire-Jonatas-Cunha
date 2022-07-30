import axios from "axios";
import { BASE_URL } from "../constants/BASE_URL";
import { EmailChecker } from "../utils/EmailChecker";
import { PasswordChecker } from "../utils/PasswordChecker";
import { UserNameChecker } from "../utils/UserNameChecker";

function SignUp(
  email,
  password,
  username,
  setError,
  setLogged,
  setInvalidEmail,
  setInvalidPassword,
  setInvalidUsername,
  setLoading
) {
  const userNameError = UserNameChecker(username, setInvalidUsername, setLoading);
  const emailError = EmailChecker(email, setInvalidEmail, setLoading);
  const passwordError = PasswordChecker(password, setInvalidPassword, setLoading);

  const body = {
    username: username,
    email: email,
    password: password,
  };

  if (!emailError && !passwordError && !userNameError) {
    axios
      .post(`${BASE_URL}/users/signup`, body)
      .then((response) => {
        sessionStorage.setItem("token", response.data.token);
        setError(false);
        setLogged(true);
        setLoading(0);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(0);
      });
  }
}

export default SignUp;
