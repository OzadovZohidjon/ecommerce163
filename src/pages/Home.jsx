import React from 'react'
import { Container, ProductList, Title } from '../components'
import { addToCartAC } from '../redux/reducers/cartProductsReducer'
import { useSelector, useDispatch } from 'react-redux';

export default function Home() {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state)
    function addToCart(product) {
        dispatch(addToCartAC(product))
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
