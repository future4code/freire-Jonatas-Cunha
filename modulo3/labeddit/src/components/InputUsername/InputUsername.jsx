import TextField from "@mui/material/TextField";

function InputUsername(props) {
  return (
    <TextField
      fullWidth
      id="outlined-basic username"
      name="Nome"
      autoComplete="Nome"
      type="text"
      label="Nome de usuário"
      variant="outlined"
      required
      value={props.username}
      onChange={(e) => props.setUsername(e.target.value)}
    />
  );
}

export default InputUsername;