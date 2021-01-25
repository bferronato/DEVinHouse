
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
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";

import { withStyles } from '@material-ui/core/styles'
import DeleteIcon from "@material-ui/icons/Delete";
import CloseIcon from '@material-ui/icons/CloseRounded';

// const styles = theme => ({
//   root: {
//     margin: 0,
//     padding: theme.spacing(3)
//   },
//   closeButton: {
//     position: "absolute",
//     right: theme.spacing(1),
//     top: theme.spacing(2),
//     color: theme.palette.grey[500]
//   }
// });

const PROCESSO_INICIAL = {
  descricao: "Teste",
  assunto: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
  interessados: ["Bruno", "Maria", "Joana", "Carla"]
}

function Cadastrar(props) {

  const { location: { state: { processo: processoEdicao } = "" } = {} } = props;

  const [processo, setProcesso] = useState(processoEdicao || PROCESSO_INICIAL);
  const [open, setOpen] = useState(false);
  const [novoInteressado, setNovoInteressado] = useState("");

  const handleAdicionarNovoInteressado = () => {
    if (novoInteressado.length > 0) {
      setProcesso((processo) => ({
        ...processo,
        "interessados": [...processo.interessados, novoInteressado]
      }));
      setNovoInteressado("");
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

  const handleSalvarProcesso = () => {
    if (processoEdicao) {
      editarProcesso();
    } else {
      salvarProcesso();
    }
  }

  const salvarProcesso = () => {
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

  const editarProcesso = () => {
    alert("Backend não implementado");
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

      <MuiDialogTitle disableTypography style={{ margin: 0, padding: "0.8rem" }}>
        <Typography variant="h6">{processoEdicao ? "Edição" : "Cadastro"} de processo</Typography>

        <IconButton style={{ position: "absolute", right: "1px", top: "1px" }} onClick={fecharFormProcesso}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>

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
        <Button onClick={handleSalvarProcesso} variant="contained" style={{
          height: "2.5rem",
          backgroundColor: "#005b95",
          color: "white",
          fontWeight: "bold",
          borderRadius: 0
        }}>
          Salvar
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Cadastrar;