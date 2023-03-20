import React from 'react';
// import ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';
import App from './routes/App';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

root.render(<App />);

// ReactDOM.render(<App />, document.getElementById('app'))

// Lo que sucedio aca es que con las nuevas actualizaciones segun la documentacion hay que generar ciertos cambios, los cuales fueron dejados comentados.