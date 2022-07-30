import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";
import CloseIcon from "@mui/icons-material/Close";

function ErrorToast(props) {
  return (
    props.open && (
    <Box sx={{ width: "100%", overflow: "hidden"}} fullWidth>
      <Collapse sx={{ width: "100%" }} in={props.open}>
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
              style={{ 
                marginRight: "0px", 
                marginTop: "0px", 
                marginBottom: "0px", 
                marginLeft: "0px", 
                padding: "0px",
                width: "30px", 
                justifyContent: "flex-start",
                alignItems: "center",
                overflow: "hidden",
          }}
            >
              <CloseIcon fontSize="inherit" position="end" />
            </IconButton>
          }
          sx={{ display: "grid", gridTemplateColumns: "10% 80% 10%" }}
        >
          <AlertTitle>
            <strong>Error</strong>
          </AlertTitle>
          {props.message}
        </Alert>
      </Collapse>
    </Box>
  ));
}

export default ErrorToast;
