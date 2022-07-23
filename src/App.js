import React from 'react'
import {
    GlobalFonts,
    GlobalStyles,
    Modal,
    Header,
    AppLayout,
} from './components/index'
import {useSelector} from 'react-redux'


function App() {
    const { open } = useSelector((state) => state)

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
