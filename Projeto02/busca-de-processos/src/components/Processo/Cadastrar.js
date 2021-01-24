
import { useState } from "react";
import ProcessoService from "../../services";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Typography
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const PROCESSO_INICIAL = {
  descricao: "",
  assunto: "",
  interessados: []
}

function Cadastrar(props) {

  const [processo, setProcesso] = useState({
    descricao: "Teste",
    assunto: "testes",
    interessados: ["Bruno", "Maria", "Joana", "Carla"]
  });

  const [novoInteressado, setNovoInteressado] = useState("");

  const handleAdicionarNovoInteressado = () => {
    if (novoInteressado.length > 0) {
      setProcesso((processo) => ({
        ...processo,
        "interessados": [...processo.interessados, novoInteressado]
      }));
      setNovoInteressado("")
    }
  };

  const handleRemoverInteressado = (indice) => {
    processo.interessados.splice(indice, 1);
    setProcesso((processo) => ({
      ...processo,
      "interessados": [...processo.interessados]
    }));
  };

  const handleProcesso = (event) => {
    const { value, name } = event.target;
    setProcesso((processo) => ({
      ...processo,
      [name]: value
    }));
  };

  const handleCadastrarProcesso = () => {

    ProcessoService.cadastrarProcesso(processo).then(processo => {
      if (processo.status === 201) {
        alert("Processo cadastrado com sucesso.");
        setProcesso(PROCESSO_INICIAL);
        fecharFormProcesso();
      } else {
        alert("Erro ao cadastrar o processo.");
      }
    }).catch(error => alert(error));

  }

  const fecharFormProcesso = () => {
    props.history.goBack()
  };

  return (

    <Dialog
      open={true}
      onClose={() => props.history.goBack()}
      fullWidth
      maxWidth="sm"
      aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Cadastro de processo {processo.descricao}
      </DialogTitle>
      <DialogContent>
        <Grid container direction="row" justify="flex-start" alignItems="flex-end">
          <Grid item xs={6}>
            <TextField
              type="text"
              name="assunto"
              value={processo.assunto}
              onChange={handleProcesso}
              label="Assunto"
              margin="dense"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <Typography variant="h6" className="MuiFormLabel-root MuiInputLabel-shrink" >
              Interessados
              </Typography>
            {processo.interessados.length > 0 && <List dense style={{ padding: '0.5rem 0 0' }} >
              {processo.interessados.map((linha, i) => (
                <ListItem key={i} alignItems="flex-start" style={{ padding: '0.1rem' }} >
                  <ListItemText secondary={linha} style={{ padding: '0.1rem', margin: '0' }} />
                  <ListItemSecondaryAction >
                    <IconButton onClick={() => handleRemoverInteressado(i)}>
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>}
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <TextField
              type="text"
              name="novoInteressado"
              value={novoInteressado}
              onChange={(e) => setNovoInteressado(e.target.value)}
              variant="standard"
              margin="dense"
              size="small"
              label="Novo interessado"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              size="small"
              onClick={handleAdicionarNovoInteressado}
              style={{ margin: '0 12px 4px', backgroundColor: "rgb(196 196 196)", color: "white", fontWeight: "bolder" }}
              type="button">Adicionar</Button>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="descricao"
              value={processo.descricao}
              onChange={handleProcesso}
              label="Descrição"
              margin="dense"
              multiline
              rows={4}
              variant="standard"
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCadastrarProcesso} variant="contained" color="primary">
          Salvar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Cadastrar;