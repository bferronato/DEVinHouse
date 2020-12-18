import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import AlunoForm from '../components/Aluno/Form/Form';
import AlunoFilter from '../components/Aluno/Filter/Filter';
import './App.min.css';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header titulo="Escola Amorinha"></Header>
                <Main>
                    <AlunoForm />
                    <AlunoFilter />
                </Main>
                <Footer />
            </div>
        )
    }
}

export default App;