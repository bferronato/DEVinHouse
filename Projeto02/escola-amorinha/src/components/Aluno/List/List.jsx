import React from 'react';
import './List.min.css';

class AlunoList extends React.Component {

    render() {
        return (
            <div className="AlunoList">
                <table className="AlunoTable"> 
                <tbody>

                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }
}

export default AlunoList;