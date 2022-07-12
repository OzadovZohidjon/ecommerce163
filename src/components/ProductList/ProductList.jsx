import React from 'react'
import { Flex } from '../Flex'
import ProductCart1 from '../ProductCart/ProductCart1'

function ProductList({products, addCart, ...props}) {
  return (
    <Flex flexWrap='wrap' gap="20">
        {
            products.map((item, i) => {
                return(
                    <ProductCart1 key={i} product={item} addCart={addCart}/>
                )
            })
        }
    </Flex>
  )
}

export default ProductList