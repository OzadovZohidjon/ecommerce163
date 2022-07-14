import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

function Header({ setOpen, store }) {
    return (
        <header className='header'>
            <div className='container'>
                <HeaderTop />
                <HeaderMid store={store} setOpen={setOpen} />
                <HeaderBottom />
            </div>
        </header>
    )
}

export default Header
