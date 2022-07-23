import React from 'react'
import { Flex, Box, Image } from '../index'
import { H1 } from '../Typography'

function ProductIntro({ product, ...props }) {
    console.log(product)
  return (
    <Flex>
        <Box w='49%'>
              <Box>
              </Box>      
        </Box>
        <Box w='49%' p='20px' border="1px solid #E2E4EB">
              <H1>{product.name_ru}</H1>      
        </Box>
    </Flex>
  )
}

export default ProductIntro