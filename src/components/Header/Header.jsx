import React from 'react'
import HeaderBottom from './HeaderBottom'
import HeaderMid from './HeaderMid'
import HeaderTop from './HeaderTop'

function Header({setOpen}) {
  return (
    <header className="header">
        <div className="container">
            <HeaderTop/>
            <HeaderMid setOpen={setOpen}/>
            <HeaderBottom/>
        </div>
    </header>
)
}

export default Header