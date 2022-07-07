import React from 'react'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { HeaderTopStyle } from './HeaderElements'
import ClockIcon from '../icons/ClockIcon'
import { SemiSpan } from '../Typography'
import {Link} from 'react-router-dom' 
import VKIcon from '../icons/VKIcon'
import PersonIcon from '../icons/PersonIcon'
import GlobalIcon from '../icons/GlobalIcon'
import { icons } from '../../utils/iconsData'

export default function HeaderTop() {
  const navbar = [
    {
      id: 1,
      path: '/',
      text: 'Мои заказы'
    },
    {
      id: 2,
      path: '/',
      text: 'Оплата'
    },
    {
      id: 3,
      path: '/',
      text: 'Отзывы'
    },
    {
      id: 4,
      path: '/',
      text: 'Блог'
    },
    {
      id: 5,
      path: '/',
      text: 'Информация'
    },
    {
      id: 6,
      path: '/',
      text: 'Контакты'
    },
  ]
  return (
    <HeaderTopStyle>
        <Container>
            <Flex justifyContent="space-between">
                <Flex alignItems="center" gap="20">
                  <ClockIcon/>
                  <SemiSpan>
                    Пн-Сб: 8:00–20:00 Вс: 9:00–20:00
                  </SemiSpan>
                </Flex>

                
              <Flex gap="15">
                {
                  navbar.map(item => {
                    return(
                      <Link key={item.id} to={item.path}>
                          {item.text}
                      </Link>
                    )
                  })
                }
              </Flex>

              <Flex gap="30">
                <Flex alignItems='center' gap="15">
                  <Link to='/'>
                    <VKIcon/>
                  </Link>
                  <Link to='/'>
                    <GlobalIcon width='18px' height="18px" dangerouslySetInnerHTML={{__html: icons.instagram}}/>
                  </Link>
                </Flex>

                <Link to="/">
                  <Flex gap="15" alignItems='center'>
                    <PersonIcon/>
                    <SemiSpan>
                      Мои заказы
                    </SemiSpan>
                  </Flex>
                </Link>
              </Flex>
            </Flex>

        </Container>
    </HeaderTopStyle>
  )
}
