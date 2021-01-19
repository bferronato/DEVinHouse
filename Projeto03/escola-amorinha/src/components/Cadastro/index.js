// import { useState } from "react";
// import { useEffect } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  // Checkbox,
  FormControl,
  // FormControlLabel,
  Grid,
  InputLabel,
  Paper,
  Select,
  Typography,
  TextField
} from "@material-ui/core";
// import Telefone from "../Telefone"


import PersonAdd from '@material-ui/icons/PersonAdd';
import SaveIcon from '@material-ui/icons/Save'
import "./index.css";

function Cadastro(props) {

  const { aluno, setAluno, alunos, setAlunos, turmas, contatosEmergencia } = props;

  console.log(`Component ALUNO CADASTRO:`)
  console.log(turmas)
  console.log(aluno)

  // const [telefoneContatoResponsavel, setTelefoneContatoResponsavel] = useState(
  //   { name: "telefoneContatoResponsavel", numero: aluno.telefoneContatoResponsavel, placeholder: "Telefone responsável" }
  // );
  // const [telefoneEmergencia, setTelefoneEmergencia] = useState(
  //   { name: "telefoneEmergencia", numero: "", placeholder: "Telefone emergência" }
  // );
  // const [autorizacaoUsoImagem, setAutorizacaoUsoImagem] = useState(true);
  // const [possuiRestricaoAlimentar, setPossuiRestricaoAlimentar] = useState(false);

  // let [contatoEmergencia, setContatoEmergencia] = useState();
  // let [listaAutorizados, setListaAutorizados] = useState();

  // useEffect(() => {
  //   setTelefoneContatoResponsavel({ ...telefoneContatoResponsavel, numero: aluno.telefoneContatoResponsavel, })
  // }, [aluno.telefoneContatoResponsavel]);

  // useEffect(() => {
  //   setTelefoneEmergencia({ ...telefoneEmergencia, numero: aluno.telefoneEmergencia, })
  // }, [aluno.telefoneEmergencia]); 

  // const handleContatoEmergencia = (event) => {
  //   setContatoEmergencia(event.target.value);
  // };

  // const handleListaAutorizados = (event) => {
  //   setListaAutorizados(event.target.value);
  // };

  const handleChange = (event) => {
    const { value, name } = event.target;

    // console.log(name)
    // console.log(value)

    setAluno((aluno) => ({
      ...aluno,
      [name]: value,
      // "telefoneContatoResponsavel": telefoneContatoResponsavel.numero,
      // "telefoneEmergencia": telefoneEmergencia.numero,
    }));

    // console.log(aluno)
  };

  const handleNovoCadastro = () => {
    setAluno({
      id: 0,
      nome: "",
      dataNascimento: "",
      nomeResponsavel: "",
      // telefoneContatoResponsavel: "",
      contatoCasoEmergencia: contatosEmergencia[0],
      telefoneEmergencia: "",
      possuiRestricaoAlimentar: "",
      descricaoRestricaoAlimentar: "",
      autorizacaoUsoImagem: "",
      listaAutorizados: [],
      turma: turmas[0],
      observacao: "",
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const existePessoa = alunos.some(item => item.id === aluno.id);

    if (existePessoa) {

      const result = alunos.map(item => {
        if (item.id === aluno.id) {
          return aluno;
        } else {
          return item;
        }
      });

      setAlunos(result);

    } else {

      setAlunos([...alunos, { ...aluno, id: Math.random().toString(36).substr(2, 9), }]);

    }

    handleNovoCadastro();

  };

  return (
    <Box component={Paper} p={2}>
      <Typography component="h1" variant="h6" color="primary" gutterBottom>
        Cadastro
      </Typography>
      <Box component="form" onSubmit={handleSubmit} >
        <Grid container direction="row" justify="space-between" alignItems="center">
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Nome"
            value={aluno.nome}
            name="nome"
            autoComplete="nome"
            onChange={handleChange}
            style={{ width: "69.5%" }}
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Data de nascimento"
            name="dataNascimento"
            value={aluno.dataNascimento}
            type="date"
            onChange={handleChange}
            style={{ width: "29.5%" }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Nome do responsável"
            name="nomeResponsavel"
            value={aluno.nomeResponsavel}
            autoComplete="nomeResponsavel"
            onChange={handleChange}
            style={{ width: "69.5%" }}
          />
          {/* <Telefone
            telefone={telefoneContatoResponsavel}
            setTelefone={setTelefoneContatoResponsavel}
          /> */}
          {/* <FormControlLabel
            control={
              <Checkbox
                checked={possuiRestricaoAlimentar}
                onChange={(e) => setPossuiRestricaoAlimentar(e.target.checked)}
                inputProps={{
                  'aria-label': 'secondary checkbox'
                }}
                color="primary"
              />}
            label="Possui restrição alimentar"
          /> */}
          <FormControl variant="outlined" margin="dense" style={{ width: "33%" }}>
            <InputLabel htmlFor="contatoCasoEmergencia">Contato de emergência</InputLabel>
            <Select
              native
              value={aluno.contatoCasoEmergencia}
              onChange={handleChange}
              label="Contato de emergência"
              inputProps={{
                name: 'contatoCasoEmergencia',
                id: 'contatoCasoEmergencia',
              }}
            >
              {contatosEmergencia.map((contato, index) => (
                <option key={index}>{contato}</option>
              ))}
            </Select>
          </FormControl>
          {/* <Telefone
            telefone={telefoneEmergencia}
            setTelefone={setTelefoneEmergencia}
          /> */}
          {/* {possuiRestricaoAlimentar &&
            <TextField
              multiline
              fullWidth
              rows={2}
              variant="outlined"
              margin="dense"
              value={aluno.descricaoRestricaoAlimentar}
              label="Descrição das restrições alimentares"
              name="descricaoRestricaoAlimentar"
              autoComplete="descricaoRestricaoAlimentar"
              onChange={handleChange}
            />
          } */}
          {/* <FormControlLabel style={{ width: "100%" }}
            control={
              <Checkbox
                checked={autorizacaoUsoImagem}
                onChange={(e) => setAutorizacaoUsoImagem(e.target.checked)}
                inputProps={{
                  'aria-label': 'secondary checkbox'
                }}
                color="primary"
              />}
            label="Autorização uso imagem"
          /> */}
          {/* <FormControl variant="outlined" margin="dense" style={{ width: "49.5%" }}>
            <InputLabel htmlFor="turma">Lista de autorizadores</InputLabel>
            <Select
              native
              value={listaAutorizados}
              onChange={handleListaAutorizados}
              label="Lista de autorizadores"
              inputProps={{
                name: 'listaAutorizados',
                id: 'listaAutorizados',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Pedro</option>
              <option value={20}>joao</option>
              <option value={30}>Maria</option>
            </Select>
          </FormControl> */}
          <FormControl variant="outlined" margin="dense" style={{ width: "49.5%" }}>
            <InputLabel htmlFor="turma">Turma</InputLabel>
            <Select
              native
              value={aluno.turma}
              onChange={handleChange}
              label="Turma"
              inputProps={{
                name: 'turma',
                id: 'turma',
              }}
            >
              {turmas.map((nomeTurma, index) => (
                <option key={index}>{nomeTurma}</option>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-multiline-static"
            label="Observações"
            margin="dense"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
          />
        </Grid>
        <Box className="button-wrapper">
          <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
            <Button
              startIcon={<PersonAdd />}
              variant="contained"
              color="primary"
              type="button"
              onClick={handleNovoCadastro}>Novo</Button>
            <Button
              startIcon={<SaveIcon />}
              variant="contained"
              color="secondary"
              type="submit">Salvar</Button>
          </ButtonGroup>
        </Box>
      </Box>
    </Box>
  );
}

export default Cadastro;