import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './menu';
import Navegation from './navegation';
import Footer from './Footer';
import * as serviceWorker from './serviceWorker';
import { setGlobal} from 'reactn';

setGlobal({
    datos: null,
    test: "",
    ids:0
});

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Navegation />, document.getElementById('menu2'));
ReactDOM.render(<div className="container"></div>, document.getElementById('submenu'));
ReactDOM.render(<div className="container"></div>, document.getElementById('main'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
serviceWorker.unregister();
