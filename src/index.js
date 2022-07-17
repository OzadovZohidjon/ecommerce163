import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { store } from './utils/data'
import StoreContext from './context/Context'

const root = ReactDOM.createRoot(document.querySelector('.wrapper'))

function reRender() {
    root.render(
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <App store={store} />
            </BrowserRouter>
        </StoreContext.Provider>
    )
}

reRender()

store.subscribe(reRender)
