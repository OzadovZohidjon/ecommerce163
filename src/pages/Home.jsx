import React from 'react'
import { Container,ProductList,Title } from '../components'

export default function Home({products, store}) {
  return (
    <>
        <Container>
            <Title color="#222A46" title='Букеты цветов с доставкой' link="/"/>
            <ProductList products={products} store={store}/>
        </Container>
    </>
  )
}
