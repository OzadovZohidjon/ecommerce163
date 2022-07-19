import React from 'react'
import { Img, Box, Flex, Button } from '../index'
import { ProductCart3Style } from './ProductCartStyle'
import { Paragraph, SemiSpan, Span } from './../Typography'
import GlobalIcon from './../icons/GlobalIcon'
import { icons } from './../../utils/iconsData'
import Counter from './../Counter/Counter'
import { useDispatch } from 'react-redux';
import { incrementAC, decrementAC } from '../../redux/reducers/cartProductsReducer'

function ProductCart3({ product, removeToCart, ...props }) {
    const dispatch = useDispatch()
    
    
    function increment() {
        dispatch(incrementAC(product.id))
    }

    function decrement() {
        dispatch(decrementAC(product.id))
    }
    return (
        <ProductCart3Style>
            <Box flex='0 0 90px' h='90px'>
                <Img
                    src={product.images[0]}
                    alt={product.name_uz}
                    borderRadius='10px'
                />
            </Box>

            <Box w='100%'>
                <Flex
                    alignItems='start'
                    justifyContent='space-between'
                    mb='20px'
                >
                    <Box>
                        <Span mb='5px' color='#222A46'>
                            {product.name_uz}
                        </Span>
                        <br />
                        <SemiSpan color='#505567'>
                            {product.description_uz}
                        </SemiSpan>
                    </Box>
                </Flex>
            </Box>
            <Flex alignItems='center' gap='24'>
                <Counter qty={product.qty} increment={increment} decrement={decrement } />
                    <Paragraph fontWeight='400'>
                        {product.price.toLocaleString()} ₽
                    </Paragraph>
            </Flex>
            <Box>
                        <Button onClick={() => removeToCart(product.id)}>
                            <GlobalIcon
                                width='24px'
                                height='24px'
                                dangerouslySetInnerHTML={{
                                    __html: icons.closeIcon,
                                }}
                            />
                        </Button>
                    </Box>
        </ProductCart3Style>
    )
}

export default ProductCart3
