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
            <Header store={store} setOpen={setOpen} />
            <AppLayout products={store.state.products} store={store} />
            <Modal
                products={store.state.cartProducts}
                store={store}
                open={open}
                setOpen={setOpen}
            />
        </>
    )
}

export default App
