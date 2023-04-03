import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Allenatore from './components/Allenatore';
import ReactDOM from 'react-dom/client';
import Calciatore from './components/Calciatore';

function App(props) {

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById('allenatore').innerHTML = ""; //resetta dati nel div con id allenatore
    document.getElementById('calciatori').innerHTML = ""; //resetta dati nel div con id calciatori
    const squadra = e.target.squadra.value; // imposta la squadra col valore ricevuto dal select box
    let allenatore = []; // crea un array vuoto per i dati dell'allenatore
    let calciatori = []; // crea un array vuoto per i dati dei calciatori
    fetch(`http://localhost:5000/api/${squadra}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      allenatore = data['allenatore']; // imposta i dati dell'allenatore nell'array allenatore
      calciatori = data['calciatori']; // imposta i dati dei calciatori nell'array calciatori
      document.getElementById('allenatore').innerHTML = JSON.stringify(allenatore, null, 2); // mostra i dati dell'allenatore nel tag con id allenatore
      document.getElementById('calciatori').innerHTML = JSON.stringify(calciatori, null, 2); // mostra i dati dei calciatori nel tag con id calciatori
    });
  }

  const prettifyResult = (e) => {
    e.preventDefault();
    document.getElementById('allenatore').innerHTML = ""; //resetta dati nel div con id allenatore
    document.getElementById('calciatori').innerHTML = ""; //resetta dati nel div con id calciatori
    const squadra = document.getElementById('squadra').value; // imposta la squadra col valore ricevuto dal select box
    let allenatore = []; // crea un array vuoto per i dati dell'allenatore
    let calciatori = []; // crea un array vuoto per i dati dei calciatori
    fetch(`http://localhost:5000/api/${squadra}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      allenatore = data['allenatore']; // imposta i dati dell'allenatore nell'array allenatore
      calciatori = data['calciatori']; // imposta i dati dei calciatori nell'array calciatori
      const coach = ReactDOM.createRoot(document.getElementById('allenatore'));
      coach.render(
        <Allenatore foto={allenatore.foto} nome={allenatore.nome} cognome={allenatore.cognome} />
      );
      const giocatori = ReactDOM.createRoot(document.getElementById('calciatori'));
      giocatori.render(
        <div className="box">
          {calciatori.map(calciatore => {
            return <Calciatore foto={calciatore.foto} nome={calciatore.nome} cognome={calciatore.cognome} numero={calciatore.numero} ruolo={calciatore.ruolo} posizione={calciatore.posizione} />
          })}
        </div>
      )
    });
  }

  const jsonifyResult = (e) => {
    e.preventDefault();
    document.getElementById('allenatore').innerHTML = ""; //resetta dati nel div con id allenatore
    document.getElementById('calciatori').innerHTML = ""; //resetta dati nel div con id calciatori
    const squadra = document.getElementById('squadra').value; // imposta la squadra col valore ricevuto dal select box
    let allenatore = []; // crea un array vuoto per i dati dell'allenatore
    let calciatori = []; // crea un array vuoto per i dati dei calciatori
    fetch(`http://localhost:5000/api/${squadra}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      allenatore = data['allenatore']; // imposta i dati dell'allenatore nell'array allenatore
      calciatori = data['calciatori']; // imposta i dati dei calciatori nell'array calciatori
      document.getElementById('allenatore').innerHTML = JSON.stringify(allenatore, null, 2); // mostra i dati dell'allenatore nel tag con id allenatore
      document.getElementById('calciatori').innerHTML = JSON.stringify(calciatori, null, 2); // mostra i dati dei calciatori nel tag con id calciatori
    });
  }

  return (
    <div className="container">
      <div className="row">
        <header>
          <h1><img src={process.env.PUBLIC_URL + "/json.png"} alt="Logo JSON" width="10%" />Pretty JSON</h1>
        </header>
      </div>
      <div className="row">
        <div className="col">
          <p>
            <em>
            Seleziona una squadra di calcio della Serie A italiana e riceverai a schermo tutte le informazioni.<br/>
            Non riesci a capirci niente?<br/>
            Lo so! Per questo ho creato un componente che ti mostrerà i dati in un formato human-friendly.
            </em>
          </p>
        </div>
        <div className="col">
          <form onSubmit={handleSubmit}>
            <label htmlFor="squadra" className="col-form-label">Squadra</label>
            <select name="squadra" id="squadra" className="form-select">
              <option value="Inter">Inter</option>
            </select>
            <button type="submit" className="btn btn-primary submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div>
          <h2>Allenatore:</h2>
          <div id="allenatore"></div>
          <h2>Calciatori:</h2>
          <div id="calciatori"></div>
        </div>
        <div className="convert-data-buttons">
          <button className="btn" onClick={jsonifyResult}>
            <img src={process.env.PUBLIC_URL + "/denied.avif"} alt="Simbolo vietato agli umani" width="20%" />
            <h5>Formato JSON</h5>
          </button>
          <button className="btn" onClick={prettifyResult}>
            <img src={process.env.PUBLIC_URL + "/pretty.jpg"} alt="Rossetto con labbra" width="30%" />
            <h5>Formato Human-friendly</h5>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
