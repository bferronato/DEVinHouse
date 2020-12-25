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
    dataNascimento: "",
    nomeResponsavel: "",
    telefoneContatoResponsavel: "",
    contatoCasoEmergencia: ["Pais", "Tios", "Avós", "Padrinhos"],
    telefoneEmergencia: "",
    possuiRestricaoAlimentar: "",
    descricaoRestricaoAlimentar: "",
    autorizacaoUsoImagem: "",
    listaAutorizados: [],
    turma: ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"],
    observacao: "",
  });

  return (
    <Box m={2}>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        color="textPrimary"
        align="center"
        className="typography"
      >Escola Amorinha
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <Cadastro
            aluno={aluno}
            setAluno={setAluno}
            alunos={alunos}
            setAlunos={setAlunos}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Listagem
            alunos={alunos}
            setAlunos={setAlunos}
            setAluno={setAluno} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
