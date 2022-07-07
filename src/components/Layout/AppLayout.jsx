import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { routes } from '../../utils/routes'

export default function AppLayout() {
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
        </Routes>
    </main>
  )
}
