// import React from 'react'
import { useState } from "react";
import { Box, Paper, Typography, TextField, Button } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Telefone from "../Telefone"

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

// import DeleteIcon from '@material-ui/icons/Delete'
import "./index.css";

function Cadastro(props) {

  const { aluno, setAluno, alunos, setAlunos } = props;

  const [telefone, setTelefone] = useState({ name: "telefoneEmergencia", numero: "", placeholder: "Telefone emergência", });

  const [autorizacaoUsoImagem, setAutorizacaoUsoImagem] = useState(true);
  const [possuiRestricaoAlimentar, setPossuiRestricaoAlimentar] = useState(false);
  let [turma, setTurma] = useState();
  let [listaAutorizados, setListaAutorizados] = useState();

  const handleTurma = (event) => {
    console.log(event.target.value)
    setTurma(event.target.value);
  };

  const handleListaAutorizados = (event) => {
    console.log(event.target.value)
    setListaAutorizados(event.target.value);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setAluno((aluno) => ({ ...aluno, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existePessoa = alunos.some(item => item.id === aluno.id);

    if (existePessoa) {

      alunos.map(item => {

        if (item.id === aluno.id) {
          return aluno;
        } else {
          return item;
        }
      })

    } else {

      setAlunos([...alunos, { ...aluno, id: Math.random().toString(36).substr(2, 9), },]);
    }

    setAluno({
      id: 0,
      nome: "",
      sobrenome: "",
      dataNascimento: "",
      nomeResponsavel: "",
      telefoneContatoResponsavel: "",
      contatoEmergencia: "",
    });

  };

  return (
    <Box component={Paper} p={2}>
      <Typography component="h2" variant="h6" color="primary">
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
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Sobrenome"
            name="sobrenome"
            value={aluno.sobrenome}
            autoComplete="sobrenome"
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            // label="Data de nascimento"
            name="dataNascimento"
            value={aluno.dataNascimento}
            type="date"
            onChange={handleChange}
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
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Telefone do responsável"
            name="telefoneContatoResponsavel"
            value={aluno.telefoneContatoResponsavel}
            autoComplete="telefoneContatoResponsavel"
            onChange={handleChange}
          />
          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Contato de emergência"
            name="contatoEmergencia"
            value={aluno.contatoEmergencia}
            autoComplete="contatoEmergencia"
            onChange={handleChange}
          />
          <Telefone telefone={telefone} setTelefone={setTelefone} />
          <FormControlLabel
            control={
              <Checkbox
                checked={possuiRestricaoAlimentar}
                // icon={<DeleteIcon />}
                // checkedIcon={<SaveIcon />}
                onChange={(e) => setPossuiRestricaoAlimentar(e.target.checked)}
                inputProps={{
                  'aria-label': 'secondary checkbox'
                }}
                color="primary"
              />}
            label="Possui restrição alimentar"
          />

          <TextField
            required
            variant="outlined"
            size="small"
            margin="dense"
            label="Descrição restrição alimentar"
            name="descricaoRestricoesAlimentares"
            value={aluno.descricaoRestricoesAlimentares}
            autoComplete="descricaoRestricoesAlimentares"
            onChange={handleChange}
          />
          <FormControlLabel style={{
              width: "50%"
            }}

            control={
              <Checkbox 

                checked={autorizacaoUsoImagem}
                // icon={<DeleteIcon />}
                // checkedIcon={<SaveIcon />}
                onChange={(e) => setAutorizacaoUsoImagem(e.target.checked)}
                inputProps={{
                  'aria-label': 'secondary checkbox'
                }}
                color="primary"
              />}
            label="Autorização uso imagem"
          />

          <FormControl variant="outlined" margin="dense"
            style={{
              width: "50%"
            }}>
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
          </FormControl>

          <FormControl variant="outlined" margin="dense" style={{
              width: "50%"
            }}>
            <InputLabel htmlFor="turma">Turma</InputLabel>
            <Select
              native

              value={turma}
              onChange={handleTurma}
              label="Turma"
              inputProps={{
                name: 'turma',
                id: 'turma',
              }}
            >
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>

          <TextField
            id="outlined-multiline-static"
            label="Observações"
            multiline
            fullWidth
            rows={4}
            variant="outlined"
          />
        </Grid>

        <Box className="button-wrapper">
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Cadastro;
