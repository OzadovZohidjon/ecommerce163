import React, {useState} from 'react'
import { H5} from '../Typography'
import {  HeaderLink, HeaderBottomStyle } from './HeaderElements'
import axios from 'axios'
import { useEffect } from 'react'
import {Dropdown,Flex, Container} from '../index';
import { getCategories } from './../../redux/reducers/categoryReducer';
import { useDispatch, useSelector } from 'react-redux';

function HeaderBottom() {
  const { categoryState } = useSelector(state => state)
  const {loading, categories} = categoryState
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])
  
  return (
    <HeaderBottomStyle>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          {
            loading ? <H5>Loading...</H5> : categories?.map(item => {
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