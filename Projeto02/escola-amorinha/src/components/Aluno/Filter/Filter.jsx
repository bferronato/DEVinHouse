import React from 'react';
import './Filter.min.css';
import AlunoList from '../List/List';
import { alunos } from "../../../services/constants";

class AlunoFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { alunos: alunos, filtro: "" };
    }

    filtrarAlunos = event => {
        event.preventDefault();
        this.setState({ filtro: event.target.value });
    }

    render() {
        return (
            <div className="AlunoFilter">
                <div>
                    <input type="text" onChange={this.filtrarAlunos} className="inputFilterAluno" autoComplete="nome" />
                </div>
                <AlunoList alunos={this.state.alunos} filtro={this.state.filtro}></AlunoList>
                {this.props.children}
            </div>
        )
    }
}

export default AlunoFilter;