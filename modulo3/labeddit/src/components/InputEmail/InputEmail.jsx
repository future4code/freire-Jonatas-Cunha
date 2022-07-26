import TextField from "@mui/material/TextField";

function InputEmail(props) {
  return (
    <TextField
      fullWidth
      id="outlined-basic"
      name="email"
      autoComplete="email"
      type="email"
      label="Email"
      variant="outlined"
      required
      value={props.email}
      onChange={(e) => props.setEmail(e.target.value)}
    />
  );
}

export default InputEmail;