import { useState, useEffect } from "react";
import ProcessoService from "../../services";
import {
    Avatar,
    Box, Button, Card, CardActions, CardHeader, CardContent, Grid, IconButton, InputAdornment,
    Paper, TextField, Typography,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from '@material-ui/icons/CloseRounded';
import "../../pages/Home/index.css";

function Listar(props) {

    const { location: { state: { pesquisa } = "" } = {} } = props;

    const [processos, setProcessos] = useState([]);
    const [processoSelecionado, setProcessoSelecionado] = useState({});
    const [detalhe, setDetalhe] = useState(false);
    const [busca, setBusca] = useState(pesquisa);

    const handleSetProcesso = (processo) => {
        setDetalhe(true);
        setProcessoSelecionado(processo);
    }

    useEffect(() => {
        handleBuscarProcessos();
    }, []);

    const handleBuscarProcessos = () => {

        ProcessoService.buscarProcessos(busca).then(processos => {
            if (processos) {
                setProcessos(processos);
            }
            // return processos
            // console.log(JSON.stringify(processos))
        }).catch(error => alert(error));

    }

    const handleExcluirProcesso = () => {

        const resultado = window.confirm(`Deseja excluir o processo: ${processoSelecionado.numero}`);
        if (resultado === true) {
            ProcessoService.excluirProcesso(processoSelecionado.id).then((retorno) => {

                alert("Processo excluído com sucesso.");
                setDetalhe(false);
                handleBuscarProcessos();

            }).catch(error => alert(error));
        }

    }

    return (
        <Box component={Paper} p={3} elevation={0}>
            <Box mb={2} elevation={0}>
                <Grid container spacing={2} alignItems="flex-end">
                    <Grid item xs={1}>
                        Busca de processos
                    </Grid>
                    <Grid item xs={4} >
                        <TextField
                            type="text"
                            name="pesquisa"
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                            autoComplete='off'
                            label="Pesquise por uma informação do processo"
                            variant="outlined"
                            size="small"
                            style={{
                                width: "100%",
                                boxShadow: "0 3px 5px 2px rgb(196 196 196)",
                                borderRadius: "5px"
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton onClick={() => handleBuscarProcessos()}>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>

                    <Grid item xs={7}>
                        <Button variant="outlined" size="medium"
                            style={{
                                height: "2.5rem",
                                borderRadius: 0,
                            }}
                        >Novo {detalhe && <>[[ detalhee ]] </>} [[{processoSelecionado.id}]]</Button>
                    </Grid>
                </Grid>
            </Box>

            <Box mb={2} elevation={0}>

                <Grid container spacing={2} alignItems="flex-start" style={{ border: "0px solid green" }}>
                    <Grid item xs={1} />
                    <Grid item xs={(detalhe && 4) || 10} >

                        {processos.length > 0 && processos.map((processo, i) => (
                            <Grid container spacing={2} alignItems="flex-start" key={i} style={{ border: "0px solid red" }}>

                                <Grid item xs={12} >

                                    <Card variant="outlined"
                                        style={{ border: "1px solid #005b95", cursor: "pointer" }}
                                        onClick={(e) => handleSetProcesso(processo)}>
                                        <CardContent>
                                            <Grid container alignItems="flex-start">
                                                {!detalhe &&
                                                    <Grid item xs={1} >
                                                        <Avatar variant="square"
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkWFnt8-03BhQJzLon1y0PV3ZqcfHWysoJg&usqp=CAU"
                                                            style={{ height: '70px', width: '70px' }} />
                                                    </Grid>
                                                }

                                                <Grid item xs={(detalhe && 6) || 2} style={{ padding: "0.1rem" }} >
                                                    <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                        Número
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {processo.numero}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={(detalhe && 6) || 3} style={{ padding: "0.1rem" }} >
                                                    <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                        Assunto
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {processo.assunto}
                                                    </Typography>
                                                </Grid>

                                                <Grid item xs={(detalhe && 6) || 3} style={{ padding: "0.1rem" }} >
                                                    <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                        Interessado
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {processo.interessados[0]}
                                                    </Typography>
                                                </Grid>

                                                {!detalhe &&
                                                    <Grid item xs={3}>
                                                        <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                            Descrição
                                                        </Typography>
                                                        <Typography variant="body2" component="p" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                                            {processo.descricao}
                                                        </Typography>
                                                    </Grid>
                                                }
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>
                    {!detalhe &&
                        <Grid item xs={1} />
                    }

                    {detalhe &&
                        <Grid item xs={7} >

                            <Card >
                                <CardHeader
                                    avatar={
                                        <Avatar variant="square"
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkWFnt8-03BhQJzLon1y0PV3ZqcfHWysoJg&usqp=CAU"
                                            style={{ width: '100px', height: '100px', textAlign: "center", alignSelf: 'center' }}
                                        />
                                    }
                                    action={
                                        <IconButton onClick={(e) => setDetalhe(false)} aria-label="settings">
                                            <CloseIcon />
                                        </IconButton>
                                    }
                                    title={
                                        <Grid container spacing={1}>
                                            <Grid item xs={6}>
                                                <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                    Processo
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {processoSelecionado.numero}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                    Data
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {processoSelecionado.entrada}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                    Assunto
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    {processoSelecionado.assunto}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    }
                                />
                                <CardContent>

                                    <Grid container spacing={1} style={{ padding: "0.5rem", paddingTop: "0" }}>
                                        <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                            Interresados
                                        </Typography>

                                        <Grid item container >
                                            {processoSelecionado.interessados && processoSelecionado.interessados.map((interessado, i) => (
                                                <Grid item xs={6} key={i}>
                                                    <Typography variant="body2" >
                                                        {interessado}
                                                    </Typography>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Grid>

                                    <Grid container spacing={1} style={{ padding: "0.5rem" }}>
                                        <Typography color="textSecondary" display="block" style={{ fontWeight: "bold" }}>
                                            Descrição
                                        </Typography>
                                        <Grid container >
                                            <Typography variant="body2" component="p">
                                                {processoSelecionado.descricao}
                                            </Typography>
                                        </Grid>
                                    </Grid>

                                </CardContent>

                                <CardActions style={{ justifyContent: 'flex-end' }} >
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={(e) => handleExcluirProcesso()}
                                        // onClick={handleExcluirProcesso}
                                        // style={{ margin: '0 12px 4px', backgroundColor: "rgb(196 196 196)", color: "white", fontWeight: "bolder" }}
                                        type="button">Remover
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="small"
                                        // onClick={handleAdicionarNovoInteressado}
                                        // style={{ margin: '0 12px 4px', backgroundColor: "rgb(196 196 196)", color: "white", fontWeight: "bolder" }}
                                        style={{ margin: '16px' }}
                                        type="button">Editar
                                    </Button>


                                </CardActions>

                            </Card>



                        </Grid>
                    }

                </Grid>


                {processos.length === 0 &&
                    <Grid container spacing={2} alignItems="flex-end">
                        <Grid item xs={1} />
                        <Grid item xs={11} >
                            <Box mb={2} elevation={1}>
                                Nenhum Processo localizado
                            </Box>
                        </Grid>
                    </Grid>
                }
            </Box>
        </Box >
    );
}

export default Listar;