import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/icons/HeaderMidIcons/CartIcon'
import HeartIcon from '../../assets/icons/HeaderMidIcons/HeartIcon'
import LogoIcon from '../../assets/icons/HeaderMidIcons/LogoIcon'
import SearchIcon from '../../assets/icons/HeaderMidIcons/SearchIcon'
import { Button, Container, Flex } from '../index'
import { H5, SemiSpan } from '../Typography'
import { CartCount, Circle, SearchBar, SearchInput } from './HeaderElements'
import { searchTextAC } from '../../redux/reducers/searchTitleReducer'
import { modalOpenAC } from '../../redux/reducers/modalReducer'
import { sumPrice, sumQty } from './../../utils/helpers'
import { useSelector, useDispatch } from 'react-redux';

function HeaderMid() {
    const dispatch = useDispatch()
    const { searchTitle, cartProducts } = useSelector(state => state)

    function onChangeHandler(text) {
        dispatch(searchTextAC(text))
    }

    function modalHandler() {
        console.log(true)
        dispatch(modalOpenAC())
    }

    return (
        <Container>
            <Flex alignItems='center' justifyContent='space-between' py='16px'>
                <Link to='/'>
                    <LogoIcon />
                </Link>

                <SearchBar>
                    <SearchInput
                        onChange={(e) => onChangeHandler(e.target.value)}
                        value={searchTitle}
                        placeholder='Поиск по сайту'
                    />
                    <SearchIcon />
                </SearchBar>

                <Flex style={{ gap: '20px' }}>
                    <Circle>
                        <HeartIcon />
                    </Circle>

                    <Button onClick={() => modalHandler()}>
                        <Flex alignItems='center' style={{ gap: '14px' }}>
                            <Circle>
                                {cartProducts.length > 0 ? (
                                    <CartCount>
                                        <SemiSpan>
                                            {sumQty(cartProducts)}
                                        </SemiSpan>
                                    </CartCount>
                                ) : null}
                                <CartIcon />
                            </Circle>

                            {cartProducts.length > 0 ? (
                                <H5 color='#E2195B'>
                                    {sumPrice(cartProducts)} ₽
                                </H5>
                            ) : null}
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default HeaderMid
