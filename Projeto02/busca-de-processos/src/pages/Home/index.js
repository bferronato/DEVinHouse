import { useState } from "react";

import Link from '@material-ui/core/Link';
import { Box, Typography, Grid, TextField } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";

function Home() {

  const [open, setOpen] = useState(true);
  const [processo, setProcesso] = useState({
    descricao: "Teste",
    assunto: "testes",
    interessados: ["Bruno", "Maria"]
  });
  const [novoInteressado, setNovoInteressado] = useState("");

  const adicionarNovoInteressado = () => {
    setProcesso((processo) => ({
      ...processo,
      "interessados": [...processo.interessados, novoInteressado]
    }));
  };
  

  const handleChangeProcesso = (event) => {
    const { value, name } = event.target;
    setProcesso((processo) => ({
      ...processo,
      [name]: value
    }));
  };

  const handlePesquisa = (event) => {
    alert("okk")
  };

  const handleSalvarProjeto = () => {
    alert("Salvar Projeto")
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
        >Você pode criar um novo processo <Link onClick={handleClickOpen} className="link"> clicando aqui </Link>
        </Typography>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Cadastro de processo</DialogTitle>
        <DialogContent>
          <Grid container direction="row" justify="flex-start" alignItems="flex-end">
            <Grid item xs={6}>
              <TextField
                type="text"
                name="assunto"
                value={processo.assunto}
                onChange={handleChangeProcesso}
                label="Assunto"
                margin="dense"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={6}>
              <TextField
                style={{ textAlign: 'left' }}
                label="Interessados"
                multiline
                rows={processo.interessados.length || 1}
                fullWidth
                value={processo.interessados.map((val, idx) => { return val; }).join('\n')}
              />
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
                onClick={adicionarNovoInteressado}
                style={{ margin: '0 12px 4px', backgroundColor: "rgb(196 196 196)", color: "white", fontWeight: "bolder" }}
                type="button">Adicionar</Button>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="descricao"
                value={processo.descricao}
                onChange={handleChangeProcesso}
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
          <Button onClick={handleSalvarProjeto} variant="contained" color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Home;