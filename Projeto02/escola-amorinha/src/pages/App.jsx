import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import AlunoForm from '../components/Aluno/Form/Form';
import AlunoList from '../components/Aluno/List/List';
import './App.min.css';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Header titulo="Escola Amorinha"></Header>
                <Nav />
                <Main>
                    <AlunoForm></AlunoForm>
                    <AlunoList></AlunoList>
                </Main>
                <Footer />
            </div>
        )
    }
}

export default App;