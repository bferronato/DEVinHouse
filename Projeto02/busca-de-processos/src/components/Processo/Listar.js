import { TextField } from "@material-ui/core";

function Listar(props) {


//   const { alunos, setAlunos, setAluno } = props;


    return (
        <div>
            <h1>okkk {props.location.state.key}</h1>
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
        </div>
    );
}

export default Listar;