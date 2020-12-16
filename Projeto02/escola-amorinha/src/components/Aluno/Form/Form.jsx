import React from 'react';
import './Form.min.css';

class AlunoForm extends React.Component {

    render() {
        return (
            <div className="AlunoForm">
                <span>Nome</span>
                <input type="text"/>
                <span>Data nascimento</span>
                <input type="text"/>
            </div>
        )
    }
}

export default AlunoForm;