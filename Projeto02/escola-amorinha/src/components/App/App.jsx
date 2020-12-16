import React from 'react';
import './App.min.css';

class App extends React.Component {

    render() {
        return (
            <div className="app">
                <header className="header">
                    <h1>
                        Escola Amorinha
                        </h1>
                </header>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="./cadastrarAluno">Cadastrar Aluno</a>
                        </li>
                        <li>
                            <a href="./visualizarAluno">Cadastrar Aluno</a>
                        </li>
                    </ul>
                </nav>
                <main className="main">
                    <h1>FORMULARIO</h1>
                </main>
                <footer className="footer">
                    <span>Todos os direitos reservados - 2020</span>
                </footer>

            </div>
        )
    }
}

export default App;