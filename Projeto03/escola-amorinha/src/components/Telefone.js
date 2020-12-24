import { TextField } from "@material-ui/core";

function Telefone(props) {

    const { telefone, setTelefone } = props;

    const handleChange = (event) => {
        let { value } = event.target;

        value = value.replace(/\D/g, "")
            .replace(/^(\d{2})(\d)/g, "($1)$2")
            .replace(/(\d)(\d{4})$/, "$1-$2");

        setTelefone((telefone) => ({ ...telefone, "numero": value }));
    };

    return (
        <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            name={telefone.name}
            value={telefone.numero}
            label={telefone.placeholder}
            inputProps={{ maxLength: 14 }}
            onChange={handleChange}
        />
    );
}

export default Telefone;