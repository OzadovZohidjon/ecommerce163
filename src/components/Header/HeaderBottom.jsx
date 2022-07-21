import React, {useState} from 'react'
import { H5} from '../Typography'
import {  HeaderLink, HeaderBottomStyle } from './HeaderElements'
import axios from 'axios'
import { useEffect } from 'react'
import {Dropdown,Flex, Container} from '../index';

function HeaderBottom() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    axios.get('https://ecommerce.main-gate.appx.uz/dev/v1/category/list').then(function (response) {
      setCategories(response.data.categories)
      setLoading(false)
  }).catch(function (error) {
    console.log(error)
  })

  }, [])
  
  return (
    <HeaderBottomStyle>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          {
            loading ? <H5>Loading...</H5> : categories.map(item => {
              return (
                <>
                  {item.children.length > 0 ? <Dropdown item={item} key={item.id}/> : <HeaderLink to={`/category/${item.slug}`} key={item.id}>
                  <H5>
                    {item.name_ru}
                  </H5>
                  </HeaderLink>
                  }
                </>
              )
            })
          }
        </Flex>
      </Container>
    </HeaderBottomStyle>
  )
}

export default HeaderBottom