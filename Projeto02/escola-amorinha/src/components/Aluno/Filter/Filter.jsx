import React from 'react';
import './Filter.min.css';

class AlunoFilter extends React.Component {

    render() {
        return (
            <div className="AlunoFilter">
                <div>
                    <input type="text" className="inputFilterAluno" />
                    <button>Filtrar Aluno</button>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default AlunoFilter;