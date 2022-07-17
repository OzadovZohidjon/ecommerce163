import React, { useContext } from 'react'
import StoreContext from './context/Context'
import {
    GlobalFonts,
    GlobalStyles,
    Modal,
    Header,
    AppLayout,
} from './components/index'

function App() {
    const store = useContext(StoreContext)
    const { open } = store.getState()
    return (
        <>
            <GlobalStyles open={open} />
            <GlobalFonts />
            <Header />
            <AppLayout />
            <Modal />
        </>
    )
}

export default App
