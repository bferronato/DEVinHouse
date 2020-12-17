import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AlunoForm from '../components/Aluno/Form/Form';
import AlunoFilter from '../components/Aluno/Filter/Filter';
import AlunoList from '../components/Aluno/List/List';
import { alunos } from "../services/constants";
import './App.min.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { alunos: [] };
    }

    componentDidMount() {
        this.setState({ alunos: alunos });
    }

    render() {
        return (
            <div className="app">
                <Header titulo="Escola Amorinha"></Header>
                <Main>
                    <AlunoForm></AlunoForm>
                    <AlunoFilter>
                        <AlunoList alunos={this.state.alunos}></AlunoList>
                    </AlunoFilter>
                </Main>
                <Footer />
            </div>
        )
    }
}

export default App;