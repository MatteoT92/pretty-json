import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

export class ButtonLang extends Component {

    constructor(props) {
        super(props);
        this.language = props.language;
        this.image = props.image;
        this.func = props.func;
    }

    render() {
        return (
        <button className="btn" onClick={this.func}>
            <img src={this.image} />
            {this.language}
        </button>
        )
    }
}

export default ButtonLang;