import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import PrettyData from './components/PrettyData';
import ButtonLang from './components/ButtonLang';
import DescriptionApp from './components/DescriptionApp';
import FormData from './components/FormData';
import ButtonsFunc from './components/ButtonsFunc';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [language, setLanguage] = useState('ITA');

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementsByClassName('json-data').innerHTML = ""; //resetta dati nel div con class json-data
    const file = document.getElementById('json').files[0]; // recupera il file JSON selezionato
    const url = URL.createObjectURL(file); // crea l'URL per il file JSON
    fetch(url, { // effettua una richiesta GET sull'URL indicato per ottenere i dati JSON
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()) // converte la risposta in un oggetto JSON
    .then(data => {
      document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);; // mostra i dati JSON nel tag con class json-data
    });
  }

  const prettifyResult = (e) => {
    e.preventDefault();
    const jsonData = document.getElementById('result').textContent; // recupera i dati JSON
    const json = JSON.parse(jsonData); // converte i dati JSON in un oggetto
    document.getElementById('result').innerHTML = '';
    const jsonRoot = ReactDOM.createRoot(document.getElementById('result'));
    if (json.length > 0) { // verifica se il dato è un'array di JSON
      jsonRoot.render(
        <div className="box">
        {json.map((element, key) => {
          return <PrettyData key={key} id={key} data={element} />
        })}
        </div>
      );
    } else { // verifica se il dato è un singolo oggetto JSON
      jsonRoot.render(
        <div className="box">
        {[json].map((element, key) => { // trasforma il singolo json in un array di un solo elemento
          return <PrettyData key={key} id={key} data={element} />
        })}
        </div>
      );
    }
  }

  const jsonifyResult = (e) => {
    e.preventDefault();
    document.getElementById('result').innerHTML = ""; //resetta dati nel div con id result
    const file = document.getElementById('json').files[0]; // recupera il file JSON selezionato
    const url = URL.createObjectURL(file); // crea l'URL per il file JSON
    fetch(url, { // effettua una richiesta GET sull'URL indicato per ottenere i dati JSON
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()) // converte la risposta in un oggetto JSON
    .then(data => {
      document.getElementById('result').innerHTML = JSON.stringify(data, null, 2);; // mostra i dati JSON nel tag con class json-data
    });
  }

  return (
    <div className="container">
      <div className="row">
        <header>
          <h1><img src={process.env.PUBLIC_URL + "/json.png"} alt="Logo JSON" width="10%" />Pretty JSON</h1>
          <ButtonLang language="ITA" image={process.env.PUBLIC_URL + "/IT.svg"} func={() => setLanguage(prevValue => 'ITA')} />
          <ButtonLang language="ENG" image={process.env.PUBLIC_URL + "/GB.svg"} func={() => setLanguage(prevValue => 'ENG')} />
        </header>
      </div>
      <div className="row">
        <div className="col">
          <DescriptionApp language={language} />
        </div>
        <div className="col">
          <FormData language={language} func={handleSubmit} />
        </div>
      </div>
      <div className="row">
        <div className="json-data">
          <div id="result"></div>
        </div>
        <div className="convert-data-buttons">
          <ButtonsFunc language={language} funcJson={jsonifyResult} funcPretty={prettifyResult} />
        </div>
      </div>
    </div>
  );
}

export default App;
