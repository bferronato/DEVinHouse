import { TextField } from "@material-ui/core";

function Listar(props) {

    return (
        <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            name="Listar"
            value="Listar"
            label="Listar"
            inputProps={{ maxLength: 14 }}
        />
    );
}

export default Listar;