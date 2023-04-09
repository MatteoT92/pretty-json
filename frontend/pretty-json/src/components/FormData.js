import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function FormData(props) {

    const [language, setLanguage] = useState(props.language);
    const { func } = props;

    useEffect(() => { // ad ogni cambiamento della lingua, il componente aggiorna il testo
        setLanguage(props.language);
    }, [props.language]);

    if (language === "ENG") {
        return (
        <form onSubmit={func}>
            <label htmlFor="json" className="col-form-label">Select the file:</label>
            <input type="file" id="json" className="form-control" accept=".json" />
            <button type="submit" className="btn btn-primary submit">Submit</button>
        </form>
        )
    } else {
        return (
        <form onSubmit={func}>
            <label htmlFor="json" className="col-form-label">Seleziona il file:</label>
            <input type="file" id="json" className="form-control" accept=".json" />
            <button type="submit" className="btn btn-primary submit">Submit</button>
        </form>
        )
    }

}

export default FormData;