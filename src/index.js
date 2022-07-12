import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { store} from './utils/data';

const root = ReactDOM.createRoot(document.querySelector('.wrapper'));

export function reRender(){
    root.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
    );
}

reRender()
