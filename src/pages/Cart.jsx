import React from 'react'
import { Box, Button, Container, Flex, Title, ProductCart3 } from '../components'
import { H3, H4, Span } from '../components/Typography'
import { useSelector, useDispatch } from 'react-redux';
import { sumPrice } from '../utils/helpers';
import { sumQty } from './../utils/helpers';
import { CartSidebarBtn } from './../components/Button/CartSidebarBtn';
import { removeToCartAC } from './../redux/reducers/cartProductsReducer';

export default function Cart() {
    const { cartProducts } = useSelector(state => state)
    const dispatch = useDispatch()

    function removeToCart(id) {
        dispatch(removeToCartAC(id))
    }

    return (
        <Container>
            <Title title='Корзина' />

            {
                cartProducts.length > 0 ? <Flex gap="20" alignItems="flex-start">
                <Box w="75%"   border="1px solid #E3E3E8" borderRadius="10px">
                    <Flex justifyContent='space-between' borderBottom="1px solid #E3E3E8"  p="15px 30px">
                        <Span>Товары в корзине</Span>
                        <Button>
                            <Span color="#7D818E">Очистить корзину</Span>
                        </Button>
                    </Flex>

                    <Box>
                        {
                            cartProducts.map((item, i) => {
                                return (
                                    <ProductCart3 key={i} product={item}  removeToCart={removeToCart}/>
                                )
                            })
                        }
                    </Box>
                </Box>
                <Box w="25%" border="1px solid #F2F6F7" borderRadius="10px"  backgroundColor='#fff'>
                    <Flex justifyContent='space-between' borderBottom="1px solid #F2F3F5" p="10px 20px"> 
                        <H4>Итого:</H4>
                        <H4>{ sumPrice(cartProducts)} ₽</H4> 
                    </Flex>

                    <Flex justifyContent='space-between'  p="10px 20px"> 
                        <Span color="#222A46;">{sumQty(cartProducts)} товара</Span>
                        <H4 color="#222A46;">{ sumPrice(cartProducts)} ₽</H4> 
                    </Flex>

                    <Flex justifyContent='space-between'  p="10px 20px"> 
                        <Span color="#222A46;">Скидка</Span>
                        <H4 color="#E2195B;">0 ₽</H4> 
                    </Flex>

                    <Flex justifyContent='space-between'  p="10px 20px"> 
                        <Span color="#222A46;">Доставка</Span>
                        <H4 color="#222A46;">бесплатно</H4> 
                    </Flex>

                    <Box p="10px 20px">
                        <CartSidebarBtn>
                            <Span color="#fff">Оформить заказ</Span>
                        </CartSidebarBtn>
                    </Box>
                </Box>
            </Flex> : <Flex
                            flex='1 1 auto'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <H3>Ваша корзина для покупок пуста.</H3>
                        </Flex>
            }
            
            

            
        </Container>
    )
}
