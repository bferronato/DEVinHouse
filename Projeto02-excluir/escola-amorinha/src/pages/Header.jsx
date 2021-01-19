import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <h1>
                    {this.props.titulo}
                </h1>
                {this.props.children}
            </header>
        )
    }
}

export default Header;