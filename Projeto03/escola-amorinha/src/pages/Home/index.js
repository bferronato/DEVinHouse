import { useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import Cadastro from "../../components/Cadastro";
import Listagem from "../../components/Listagem";
import "./index.css";

function Home() {
  const [alunos, setAlunos] = useState([]);
  const [aluno, setAluno] = useState({ 
    id: 0, 
    nome: "", 
    sobrenome: "", 
    dataNascimento: "", 
    nomeResponsavel: "", 
    telefoneContatoResponsavel: "", 
    contatoEmergencia: "",
    possuiRestricaoAlimentar: "",
    descricaoRestricoesAlimentares: "",
  });

  return (
    <Box m={2}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        color="textSecondary"
        align="center"
        className="typography"
      >Escola Amorinha
      </Typography>
      <Grid container spacing={2} >
        <Grid item xs={12} sm={6} m={2}>
          <Cadastro
            aluno={aluno}
            setAluno={setAluno}
            alunos={alunos}
            setAlunos={setAlunos}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Listagem alunos={alunos} setAlunos={setAlunos} setAluno={setAluno} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
