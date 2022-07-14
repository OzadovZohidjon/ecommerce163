import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/icons/HeaderMidIcons/CartIcon'
import HeartIcon from '../../assets/icons/HeaderMidIcons/HeartIcon'
import LogoIcon from '../../assets/icons/HeaderMidIcons/LogoIcon'
import SearchIcon from '../../assets/icons/HeaderMidIcons/SearchIcon'
import { Button, Container, Flex } from '../index'
import { H5, SemiSpan } from '../Typography'
import { CartCount, Circle, SearchBar, SearchInput } from './HeaderElements'

function HeaderMid({ setOpen, store }) {
    return (
        <Container>
            <Flex alignItems='center' justifyContent='space-between' py='16px'>
                <Link to='/'>
                    <LogoIcon />
                </Link>

                <SearchBar>
                    <SearchInput
                        onChange={(e) =>
                            store.dispatch({
                                type: 'search_text',
                                text: e.target.value,
                            })
                        }
                        value={store.state.searchTitle}
                        placeholder='Поиск по сайту'
                    />
                    <SearchIcon />
                </SearchBar>

                <Flex style={{ gap: '20px' }}>
                    <Circle>
                        <HeartIcon />
                    </Circle>

                    <Button onClick={() => setOpen(true)}>
                        <Flex alignItems='center' style={{ gap: '14px' }}>
                            <Circle>
                                <CartCount>
                                    <SemiSpan>2</SemiSpan>
                                </CartCount>
                                <CartIcon />
                            </Circle>

                            <H5 color='#E2195B'>16 500 ₽</H5>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </Container>
    )
}

export default HeaderMid
