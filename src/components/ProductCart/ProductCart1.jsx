import React from 'react'
import { Box, Img } from '../index'
import { SemiSpan } from '../Typography'
import { ProductCart1ContentStyle, ProductCart1Style } from './ProductCartStyles'

function ProductCart1({product, ...props}) {
  return (
   <ProductCart1Style>
        <Box h="60%" borderTopLeftRadius="10px">
            <Img src={product.images[0]} objectFit="cover" alt={product.name_uz}/>
        </Box>

        <ProductCart1ContentStyle>
            <SemiSpan>
                {product.name_uz}
            </SemiSpan>
        </ProductCart1ContentStyle>
   </ProductCart1Style>
  )
}

export default ProductCart1
