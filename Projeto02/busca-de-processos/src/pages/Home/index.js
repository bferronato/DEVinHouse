import { useState } from "react";
import ProcessoService from "../../services";
import { useHistory, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Link as LinkMaterialUi,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  TextField,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import DeleteIcon from "@material-ui/icons/Delete";
import "./index.css";

const PROCESSO_INICIAL = {
  descricao: "",
  assunto: "",
  interessados: []
}

function Home() {

  const history = useHistory();

  const [open, setOpen] = useState(false);

  const [pesquisa, setPesquisa] = useState("");

  const [novoInteressado, setNovoInteressado] = useState("");

  const [processo, setProcesso] = useState({
    descricao: "Teste",
    assunto: "testes",
    interessados: ["Bruno", "Maria", "Joana", "Carla"]
  });

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

  const handlePesquisa = (event) => {

    history.push({
      pathname: "/listar",
      state: {
        pesquisa: pesquisa
      }
    });

  };

  const handleCadastrarProcesso = () => {

    ProcessoService.cadastrarProcesso(processo).then(processo => {
      if (processo.status === 201) {
        alert("Processo cadastrado com sucesso.")
        setProcesso(PROCESSO_INICIAL);
        fecharFormProcesso();
      } else {
        alert("Erro ao cadastrar o processo.")
      }
    }).catch(error => alert(error));

  }

  const abrirFormProcesso = () => {
    setOpen(true);
  };

  const fecharFormProcesso = () => {
    setOpen(false);
  };

  return (
    <Box m={1} justifyContent="center" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: "calc(100vh - 16px)"
    }}>
      <Box>
        <Typography
          component="h2"
          variant="subtitle1"
          gutterBottom
          align="center"
          className="subtitle"
        >Busca de Processos
      </Typography>
      </Box>

      <Box mx="auto" width={2 / 6} >
        <TextField
          name="pesquisa"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          label="Pesquise por uma informação do processo"
          variant="outlined"
          size="small"
          margin="dense"
          style={{
            width: "100%",
            boxShadow: "0 3px 5px 2px rgb(196 196 196)",
            borderRadius: "5px"
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment>
                <IconButton onClick={handlePesquisa}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </Box>

      <Box pt={8} >
        <Typography
          component="div"
          variant="subtitle1"
          gutterBottom
          align="center"
          className="label"
        >Você pode criar um novo processo <LinkMaterialUi onClick={abrirFormProcesso} className="link"> clicando aqui </LinkMaterialUi>
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={fecharFormProcesso}
        fullWidth
        maxWidth="sm"
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">
          Cadastro de processo
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
    </Box>
  );
}

export default Home;