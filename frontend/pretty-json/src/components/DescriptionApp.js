import React, { useEffect, useState } from 'react'

function DescriptionApp(props) {

    const [language, setLanguage] = useState(props.language);

    useEffect(() => { // ad ogni cambiamento della lingua, il componente aggiorna il testo
        setLanguage(props.language);
    }, [props.language]);

    if (language === "ENG") {
        return (
            <p>
                <em>
                Select a JSON file and you will receive all the information on the screen.<br/>
                Can't you understand anything?<br/>
                I know! For this I created a component that will show you the data in a human-friendly format.
                </em>
            </p>
        )
    } else {
        return (
            <p>
                <em>
                Seleziona un file JSON e riceverai a schermo tutte le informazioni.<br/>
                Non riesci a capirci niente?<br/>
                Lo so! Per questo ho creato un componente che ti mostrerà i dati in un formato human-friendly.
                </em>
            </p>
        )
    }

}

export default DescriptionApp;