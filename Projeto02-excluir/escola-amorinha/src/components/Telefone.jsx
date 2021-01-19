import React from 'react';

class Telefone extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            id: this.props.id,
            name: this.props.name,
            value: this.props.value,
            placeholder: this.props.placeholder
        };
    }

    change = (event) => {
        let value = event.target.value;

        value = value.replace(/\D/g, "");                 //Remove tudo o que não é dígito
        value = value.replace(/^(\d{2})(\d)/g, "($1)$2"); //Coloca parênteses em volta dos dois primeiros dígitos
        value = value.replace(/(\d)(\d{4})$/, "$1-$2");   //Coloca hífen entre o quarto e o quinto dígitos

        this.setState({
            value: value
        });
    };

    render() {
        return (
            <React.Fragment>
                <input
                    type="text"
                    id={this.state.id}
                    name={this.state.name}
                    value={this.state.value}
                    onChange={this.change}
                    maxLength="14"
                    placeholder={this.state.placeholder}
                />
            </React.Fragment>
        );
    }
}

export default Telefone;