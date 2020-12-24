import React from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'

import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { green } from '@material-ui/core/colors'

import 'fontsource-roboto'
import Typography from '@material-ui/core/Typography'

import Container from '@material-ui/core/Container'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #fff)',
    borderRadius: 5,
    padding: '10px 10px',

  }
})

const theme = createMuiTheme({
  typography: {
    h2: {
      fontSize: 18,
    }
  },
  palette: {
    primary: {
      main: green[500],
    }
  }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Botão Estilizado</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              'aria-label': 'secondary checkbox'
            }}
            color="primary"
          />}
        label="Selecionar ou não"
      />


    </div>
  )
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <div style={{
                  backgroundColor: "lightgray"
                }}>
          <header className="App-header">
            <Typography variant="h3">
              Welcome to MUI
          </Typography>
            <Typography variant="subtitle1" component="div">
              Learn Material UI
          </Typography>
            <ButtonStyled />
            <TextField
              size="small"
              variant="outlined"
              color="secondary"
              label="Teste"
            />
            <CheckboxExample></CheckboxExample>
            <ButtonGroup>
              <Button
                startIcon={<SaveIcon />}
                onClick={() => alert("Save")}
                size="medium"
                style={{
                  fontSize: 16
                }}
                variant="contained"
                color="primary">
                Save
        </Button>
              <Button
                startIcon={<DeleteIcon />}
                onClick={() => alert("Discard")}
                size="medium"
                style={{
                  fontSize: 16
                }}
                variant="contained"
                color="secondary">
                Discard
        </Button>
            </ButtonGroup>
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
