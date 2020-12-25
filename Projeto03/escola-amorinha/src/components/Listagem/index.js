import {
  Box,
  Button,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@material-ui/core";
import { Edit, Delete } from "@material-ui/icons";

function Listagem(props) {
  const { alunos, setAlunos, setAluno } = props;

  const handleEdit = (id) => {
    const pessoaClicada = alunos.find(item => item.id === id);
    setAluno(pessoaClicada);
  }

  const handleDelete = (id) => {
    const result = alunos.filter(item => item.id !== id);
    setAlunos(result);
  }

  return (
    <Box component={Paper} p={2}>
      <Typography component="h1" variant="h6" color="secondary" gutterBottom>
        Listagem
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">Nome</TableCell>
            <TableCell align="center">Data de nascimento</TableCell>
            <TableCell align="center">Turma</TableCell>
            <TableCell align="center">Telefone de emergência</TableCell>
            <TableCell align="center">Caso de emergência avisar</TableCell>
            <TableCell>Ação</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {alunos.map((linha) => (
            <TableRow key={linha.id}>
              <TableCell align="center">{linha.nome}</TableCell>
              <TableCell align="center">{linha.dataNascimento}</TableCell>
              <TableCell align="center">{linha.turma}</TableCell>
              <TableCell align="center">{linha.telefoneEmergencia}</TableCell>
              <TableCell align="center">{linha.contatoCasoEmergencia}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginRight: "10px" }}
                  startIcon={<Edit />}
                  onClick={() => handleEdit(linha.id)}
                >
                  Editar
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<Delete />}
                  onClick={() => handleDelete(linha.id)}
                >
                  Deletar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}

export default Listagem;
