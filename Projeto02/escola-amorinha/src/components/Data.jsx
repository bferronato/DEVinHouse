import React from 'react';

class Data extends React.Component {

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
        this.setState({
            value: event.target.value
        });
    };

    render() {
        return (
            <React.Fragment>
                <input
                    type="date"
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

export default Data;