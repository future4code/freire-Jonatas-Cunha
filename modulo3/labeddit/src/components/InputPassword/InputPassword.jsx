import { useState } from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";


function InputPassword(props) {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const handleMouseDownPassword = (e) => {
        e.preventDefault();
      };
    

  return (
    <FormControl required variant="outlined" sx={{ display: "grid" }}>
    <InputLabel htmlFor="outlined-adornment-password">
      Senha
    </InputLabel>
    <OutlinedInput
      id="outlined-adornment-password"
      type={showPassword ? "text" : "password"}
      value={props.password}
      minLength={7}
      required
      onChange={(e) => props.setPassword(e.target.value)}
      autoComplete="current-password"
      endAdornment={
        <InputAdornment
          position="end"
          sx={{
            width: "130px",
            height: "30px",
            display: "flex",
            overflow: "hidden",
          }}
        >
          <IconButton
            sx={{ width: "30%", height: "100%", gap: "0px" }}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Senha"
    />
  </FormControl>
  )
}

export default InputPassword;