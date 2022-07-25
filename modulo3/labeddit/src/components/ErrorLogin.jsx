import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";

function ErrorLogin(props) {
  return (
    <Box sx={{ width: "100%", marginTop: "40px"}} fullWidth>
      <Collapse sx={{width: "100%"}} in={props.open}>
        <Alert
          severity="error"
          action={
            <IconButton
            position="end"
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" position="end" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          <AlertTitle>
            <strong>Error</strong>
          </AlertTitle>
          Email ou senha incorretos.
        </Alert>
      </Collapse>
    </Box>
  );
}

export default ErrorLogin;
