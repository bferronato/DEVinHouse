import { useState } from "react";

import { Link } from 'react-router-dom';
import { Box, Typography, Grid, TextField } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { turmas, contatosEmergencia } from "../../util/constants"
import Cadastro from "../../components/Cadastro";
import Listagem from "../../components/Listagem";
import "./index.css";

function Home() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({
    id: 0,
    nome: "Bruno",
    dataNascimento: "1983-04-28",
    nomeResponsavel: "Luciana",
    telefoneContatoResponsavel: "4934335655",
    contatoCasoEmergencia: contatosEmergencia[0],
    telefoneEmergencia: "48984081585",
    possuiRestricaoAlimentar: false,
    descricaoRestricaoAlimentar: "Restrição com glutém e amendoim",
    autorizacaoUsoImagem: true,
    listaAutorizados: [],
    turma: turmas[0],
    observacao: "Sem observações",
  });

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
                <IconButton>
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
        >Você pode criar um novo processo <Link to="/h1" className="link"> clicando aqui </Link>
        </Typography>
      </Box>


      {/* <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Cadastro
            aluno={aluno}
            setAluno={setAluno}
            alunos={alunos}
            setAlunos={setAlunos}
            turmas={turmas}
            contatosEmergencia={contatosEmergencia}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Listagem
            aluno={aluno}
            setAluno={setAluno}
            alunos={alunos}
            setAlunos={setAlunos}
          />
        </Grid>
      </Grid> */}
    </Box>
  );
}

export default Home;
