import { useState } from "react";
import { useHistory, Link } from 'react-router-dom';
import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import "./index.css";

function Home() {

  const history = useHistory();

  const [pesquisa, setPesquisa] = useState("");

  const handlePesquisa = (event) => {
    history.push({
      pathname: "/listar",
      state: {
        pesquisa: pesquisa
      }
    });
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
        >Você pode criar um novo processo
        <Link to={{
            pathname: "/cadastrar",
          }} > clicando aqui </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export default Home;