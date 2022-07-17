import React from 'react'
import ProductCartBtnIcon from '../../assets/icons/MainIcons/ProductCartBtnIcon'
import { Box } from '../Box'
import { Flex } from '../Flex'
import { Img } from '../Img'
import { H5, H6 } from '../Typography'
import {
    ProductCartStyle,
    ProductCart1ContentStyle,
    ProductCartOldPrice,
    ProductCartBtn,
} from './ProductCartStyle'

function ProductCart1({ product, addToCart, ...props }) {
    return (
        <ProductCartStyle>
            <Box h='60%'>
                <Img
                    src={product.images[0]}
                    objectFit='cover'
                    alt={product.name_uz}
                />
            </Box>

            <ProductCart1ContentStyle>
                <Flex flexDirection='column'>
                    <H5 color='#222A46' mb='10px'>
                        {product.name_ru}
                    </H5>

                    <H6 fontWeight='400' color=' #505567'>
                        Высота: 60 см, Ширина: 35 см
                    </H6>
                </Flex>

                <Flex justifyContent='space-between' alignItems='center'>
                    <Box>
                        <H5 color='#222A46'>{product.price}</H5>

                        <ProductCartOldPrice>
                            {product.oldPrice}
                        </ProductCartOldPrice>
                    </Box>

                    <ProductCartBtn onClick={() => addToCart(product)}>
                        <ProductCartBtnIcon />В корзину
                    </ProductCartBtn>
                </Flex>
            </ProductCart1ContentStyle>
        </ProductCartStyle>
    )
}

export default ProductCart1
