import React, { Component } from 'react'

export class Calciatore extends Component {

    constructor(props) {
      super(props);
    }

    render() {
        const { foto, nome, cognome, numero, ruolo, posizione} = this.props;
        return (
        <div>
            <img src={foto} alt={"Foto " + nome + " " + cognome} />
            <h3>{numero} {nome} {cognome}</h3>
            <h4>{ruolo}</h4>
            {posizione && <h4>{posizione}</h4>}
        </div>
        )
    }

}

export default Calciatore