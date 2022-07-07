import React from 'react'
import { Container,ProductList,Title } from '../components'
import { products } from '../utils/data'

export default function Home() {
  return (
    <>
        <Container>
            <Title color="#222A46" title='Букеты цветов с доставкой' link="/"/>
            <ProductList products={products}/>
        </Container>
    </>
  )
}
