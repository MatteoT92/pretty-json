import React, { Component } from 'react'

export class Allenatore extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { foto, nome, cognome} = this.props;
        return (
        <div>
            <img src={foto} alt={"Foto " + nome + " " + cognome} />
            <h3>{nome} {cognome}</h3>
        </div>
        )
    }

}

export default Allenatore