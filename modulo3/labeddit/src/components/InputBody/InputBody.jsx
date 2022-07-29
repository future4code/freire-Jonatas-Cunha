import { TextField } from "@mui/material";
import { SecondaryColor } from "../../constants/Colors";

function InputBody(props) {
  return (
    <TextField
      style={{backgroundColor: SecondaryColor}}
      fullWidth
      required
      id="outlined-multiline-static"
      label={props.label}
      multiline
      maxLength="240"
      rows={6}
      value={props.value}
      onChange={(e) => props.change(e.target.value)}
    />
  );
}

export default InputBody;
