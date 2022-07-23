import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from './../redux/reducers/productReducer';
import { Container, Loader, ProductIntro } from '../components';

function Product() {
  const location = useLocation()
  const dispatch = useDispatch()
  const { productState } = useSelector(state => state)
  const {loading, product} = productState
  
  useEffect(() => {
    dispatch(getProduct(location.pathname.split('/')[2]))
  }, [])
  
  return (
    <Container>
      {
        loading ? <Loader/> : <ProductIntro product={product} />
      }
    </Container>
  )
}

export default Product
