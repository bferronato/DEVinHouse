import React from 'react';
import './Form.min.css';

class AlunoForm extends React.Component {

    render() {
        return (
            <div className="AlunoForm">
                <input type="text" id="nome" placeholder="Nome" />
                <input type="text" id="dataNascimento" placeholder="Data de nascimento" />
                <input type="text" id="nomeResponsavel" placeholder="Nome do responsável" />
                <input type="text" id="telefoneContatoResponsavel" placeholder="Telefone responsável" />
                <input type="text" id="contatoEmergencia" placeholder="Contato de emergência" />
                <input type="text" id="telefoneEmergencia" placeholder="Telefone emergência" />
                <input type="text" id="restricaoAlimentar" placeholder="Possui restrição alimentar" />
                <input type="text" id="descricaoRestricoesAlimentares" placeholder="Descrição restrição alimentar" />
                <input type="text" id="autorizacaoFotosVideos" placeholder="Autorização uso imagem" />
                <input type="text" id="listaAutorizados" placeholder="Lista de autorizadores" />
                <input type="text" id="turma" placeholder="Turma" />
                <input type="text" id="observacoes" placeholder="Observações" />
            </div>
        )
    }
}

export default AlunoForm;