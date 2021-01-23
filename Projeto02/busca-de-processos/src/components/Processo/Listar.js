import { useState, useEffect } from "react";
import ProcessoService from "../../services";
import {
    Avatar,
    Box, Button, Card, CardContent, Grid, IconButton, InputAdornment,
    Paper, TextField, Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "../../pages/Home/index.css";

function Listar(props) {

    const { location: { state: { pesquisa } = "" } = {} } = props;

    const [processos, setProcessos] = useState([]);
    const [busca, setBusca] = useState(pesquisa);

    useEffect(() => {
        handleBuscarProcessos();
    }, []);

    const handleBuscarProcessos = () => {

        ProcessoService.buscarProcessos(busca).then(processos => {
            if (processos) {
                setProcessos(processos)
            }
            console.log(JSON.stringify(processos))
        }).catch(error => alert(error));

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
                        >Novo</Button>
                    </Grid>
                </Grid>
            </Box>

            <Box mb={2} elevation={0}>

                {processos.length > 0 && processos.map((processo, i) => (
                    <Grid container spacing={2} alignItems="flex-end" key={i}>
                        <Grid item xs={1} />
                        <Grid item xs={10} >
                            <Card variant="outlined">
                                <CardContent>

                                    <Grid container spacing={2} alignItems="flex-start">

                                        <Grid item xs={1} >
                                            <Avatar variant="square"
                                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQkWFnt8-03BhQJzLon1y0PV3ZqcfHWysoJg&usqp=CAU"
                                                style={{ height: '70px', width: '70px' }} />
                                        </Grid>

                                        <Grid item xs={2} >
                                            <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                Número
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {processo.numero}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={3} >
                                            <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                Assunto
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {processo.assunto}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={3} >
                                            <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                Interessado
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {processo.interessados[0]}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={3} >
                                            <Typography color="textSecondary" style={{ fontWeight: "bold" }}>
                                                Descrição
                                            </Typography>
                                            <Typography variant="body2" component="p" style={{ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" }}>
                                                {processo.descricao}
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={1} />
                    </Grid>
                ))}
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