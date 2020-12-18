import React from 'react';
import './List.min.css';

class AlunoList extends React.Component {

    constructor(props) {
        console.log(props)
        super(props);
    }

    render() {

        const filtro = this.props.filtro;

        let alunos = this.props.alunos.filter(function (aluno) {
            return aluno.nome.toLowerCase().includes(filtro.toLowerCase());
        });

        return (
            <div className="AlunoList">
                <table className="AlunoTable">
                    <tbody>
                        <tr>
                            <th>Nome</th>
                            <th>Nascimento</th>
                            <th>Turma</th>
                            <th>Emergência</th>
                            <th>Ação</th>
                        </tr>


                        {alunos.map((aluno) => (
                            <tr key={aluno.nome}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.dataNascimento}</td>
                                <td>{aluno.turma}</td>
                                <td>{aluno.telefoneEmergencia} ({aluno.contatoEmergencia})</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Excluir</button>
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