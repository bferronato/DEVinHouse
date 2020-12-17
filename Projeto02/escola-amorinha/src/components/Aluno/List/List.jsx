import React from 'react';
import './List.min.css';

class AlunoList extends React.Component {

    render() {

        const alunos = this.props.alunos;

        return (
            <div className="AlunoList">
                <table className="AlunoTable">
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Nascimento</th>
                            <th>Turma</th>
                            {/* <th>Tel. Emergências</th> */}
                            <th>Emergência</th>
                            <th>Ação</th>
                        </tr>
                        {alunos.map((aluno) => (
                            <tr key={aluno.nome}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.dataNascimento}</td>
                                <td>{aluno.turma}</td>
                                <td>{aluno.telefoneEmergencia} ({aluno.contatoEmergencia})</td>
                                {/* <td>{aluno.contatoEmergencia}</td> */}
                                <td>
                                    <button>Editar</button>
                                    <button>Excluir</button>
                                    {/* <a href="./">Editar</a>
                                    <a href="./">Excluir</a> */}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default AlunoList;