import React, { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function ButtonsFunc(props) {

    const [language, setLanguage] = useState(props.language);
    const { funcJson, funcPretty } = props;

    useEffect(() => { // ad ogni cambiamento della lingua, il componente aggiorna il testo
        setLanguage(props.language);
    }, [props.language]);

    if (language === "ENG") {
        return (
            <>
                <button className="btn" onClick={funcJson}>
                    <img src={process.env.PUBLIC_URL + "/denied.avif"} alt="Forbidden symbol for humans" width="20%" />
                    <h5>JSON format</h5>
                </button>
                <button className="btn" onClick={funcPretty}>
                    <img src={process.env.PUBLIC_URL + "/pretty.jpg"} alt="Lipstick with lips" width="30%" />
                    <h5>Human-friendly format</h5>
                </button>
            </>
            )
    } else {
        return (
            <>
                <button className="btn" onClick={funcJson}>
                    <img src={process.env.PUBLIC_URL + "/denied.avif"} alt="Simbolo vietato agli umani" width="20%" />
                    <h5>Formato JSON</h5>
                </button>
                <button className="btn" onClick={funcPretty}>
                    <img src={process.env.PUBLIC_URL + "/pretty.jpg"} alt="Rossetto con labbra" width="30%" />
                    <h5>Formato Human-friendly</h5>
                </button>
            </>
            )
    }

}

export default ButtonsFunc;