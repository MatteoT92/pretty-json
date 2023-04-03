
# Pretty JSON

Pretty JSON è una web-app che ti permette di visualizzare a schermo i dati ricevuti tramite API in un formato human-friendly.
## Tecnologie usate

**Front-end:** React, Bootstrap

**Back-end:** Node, Express

**Database:** JSON

**Version Control System:** Git
## Prerequisiti

Aver installato i seguenti software:

- [Node.js](https://nodejs.org/it/download)
- [Git Bash](https://git-scm.com/)
- [Postman](https://www.postman.com/downloads/) (opzionale)


## Installazione

Scarica il progetto

```bash
  git clone https://github.com/MatteoT92/pretty-json.git
```

Installa le dipendenze richieste dal server e client

```bash
  cd backend
  npm install
```

```bash
  cd frontend/serie-a
  npm install
```

Avvia il server

```bash
  cd backend
  npm start
```

Avvia il client

```bash
  cd frontend/serie-a
  npm start
```


## Esecuzione nel browser

Per testare la web-app occorre andare sul browser e digitare il seguente URL

```http
  http://localhost:3000/
```


## Riferimenti API

Nel caso vogliate usare Postman per testare le API vi rimando sotto le specifiche inerenti ad esse.

#### Ritorna un JSON con tutti i dati delle squadre di Serie A

```http
  GET http://localhost:5000/api
```

#### Ritorna un JSON con i dati della singola squadra di Serie A indicata nel parametro

```http
  GET http://localhost:5000/api/:squadra
```

| Parametro | Tipo     | Descrizione                       |
| :-------- | :------- | :-------------------------------- |
| `squadra`      | `string` | **Richiesto**. Nome della squadra di Serie A |
