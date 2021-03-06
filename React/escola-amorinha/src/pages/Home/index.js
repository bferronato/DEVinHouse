import { useState } from "react";
import { Box, Typography, Grid } from "@material-ui/core";
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
      </Grid>
    </Box>
  );
}

export default Home;
