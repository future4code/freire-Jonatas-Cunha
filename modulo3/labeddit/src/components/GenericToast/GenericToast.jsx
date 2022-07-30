import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function GenericToast(props) {
  return (
    props.open && (
    <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity={props.severity} onClose={() => {props.close(false)}}>
            {props.message}
        </Alert>
    </Stack>
    )
  );
}

export default GenericToast;