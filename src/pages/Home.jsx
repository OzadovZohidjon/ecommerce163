import React from 'react'
import { useContext } from 'react'
import { Container, ProductList, Title } from '../components'
import StoreContext from '../context/Context'
import { addToCartAC } from '../utils/reducers/cartProductsReducer'

export default function Home() {
    const store = useContext(StoreContext)
    const { products } = store.getState()
    function addToCart(product) {
        store.dispatch(addToCartAC(product))
    }
    return (
        <>
            <Container>
                <Title
                    color='#222A46'
                    title='Букеты цветов с доставкой'
                    link='/'
                />
                <ProductList products={products} addToCart={addToCart} />
            </Container>
        </>
    )
}
