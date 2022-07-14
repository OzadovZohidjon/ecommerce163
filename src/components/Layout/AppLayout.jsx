import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../utils/routes'
import Home from './../../pages/Home';

export default function AppLayout({products, store}) {
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
            <Route path='/' element={<Home products={products} store={store}/>}/>
        </Routes>
    </main>
  )
}
