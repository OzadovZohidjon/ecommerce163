import React, { useState } from 'react'
import {
    GlobalFonts,
    GlobalStyles,
    Modal,
    Header,
    AppLayout,
} from './components/index'

function App({ store }) {
    const [open, setOpen] = useState(false)
    return (
        <>
            <GlobalStyles open={open} />
            <GlobalFonts />
            <Header setOpen={setOpen} />
            <AppLayout
                products={store.state.products}
                addCart={store.addCart}
            />
            <Modal
                products={store.state.cartProducts}
                removeCart={store.removeCart}
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default App
