import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../utils/routes'
import Home from './../../pages/Home';

export default function AppLayout({products, addCart}) {
  return (
    <main className='main'>
        <Routes>
            {
                routes.map(item => {
                    return(
                        <Route key={item.id} path={item.path} element={item.component}/>
                    )
                })
            }
            <Route path='/' element={<Home products={products} addCart={addCart}/>}/>
        </Routes>
    </main>
  )
}
