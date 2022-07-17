import React, { useContext } from 'react'
import { ModalPanelStyle, ModalStyle } from './ModalStyle'
import { Flex, Button, Box, ProductCart2 } from '../index'
import { H3, Paragraph } from '../Typography'
import GlobalIcon from '../icons/GlobalIcon'
import { icons } from './../../utils/iconsData'
import StoreContext from './../../context/Context'
import { modalCloseAC } from './../../utils/reducers/modalReducer'
import { removeToCartAC } from './../../utils/reducers/cartProductsReducer'
import { sumPrice } from '../../utils/helpers'
import { Link } from 'react-router-dom'

function Modal() {
    const store = useContext(StoreContext)
    const { open, cartProducts } = store.getState()

    function modalHandler() {
        store.dispatch(modalCloseAC())
    }

    function removeToCart(id) {
        store.dispatch(removeToCartAC(id))
    }
    return (
        <ModalStyle open={open}>
            <ModalPanelStyle open={open}>
                <Flex h='100%' flexDirection='column'>
                    <Flex
                        p='20px'
                        borderBottom='1px solid #E2E4EB'
                        alignItems='center'
                        justifyContent='space-between'
                    >
                        <Paragraph fontSize='18px'>Корзина</Paragraph>
                        <Button onClick={() => modalHandler()}>
                            <GlobalIcon
                                width='24px'
                                height='24px'
                                dangerouslySetInnerHTML={{
                                    __html: icons.closeIcon,
                                }}
                            />
                        </Button>
                    </Flex>

                    {cartProducts.length > 0 ? (
                        <Box flex='1 1 auto' overflowY='scroll'>
                            {cartProducts.map((item, i) => (
                                <ProductCart2
                                    key={i}
                                    product={item}
                                    removeToCart={removeToCart}
                                />
                            ))}
                        </Box>
                    ) : (
                        <Flex
                            flex='1 1 auto'
                            alignItems='center'
                            justifyContent='center'
                        >
                            <H3>Ваша корзина для покупок пуста.</H3>
                        </Flex>
                    )}
                    <Box>
                        <Flex
                            p='20px'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <H3>Итого:</H3>
                            <H3>{sumPrice(cartProducts)} ₽</H3>
                        </Flex>
                        <Flex
                            p='20px'
                            backgroundColor='#F2F6F7;'
                            alignItems='center'
                            justifyContent='space-between'
                        >
                            <Button onClick={() => modalHandler()}>
                                Продолжить покупки
                            </Button>
                            <Link to='/cart'>
                                <Button onClick={() => modalHandler()}>
                                    Оформить заказ
                                </Button>
                            </Link>
                        </Flex>
                    </Box>
                </Flex>
            </ModalPanelStyle>
        </ModalStyle>
    )
}

export default Modal
