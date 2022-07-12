import React from 'react'
import { Box } from '../Box'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { HeaderTopStyle, HeaderTopText, HeaderLink } from './HeaderElements'
import ClockIcon from '../../assets/icons/HeaderTopIcons/ClockIcon'
import { SemiSpan, Span } from '../Typography'
import {Link} from 'react-router-dom'
import VkIcon from '../../assets/icons/HeaderTopIcons/VkIcon'
import InstIcon from '../../assets/icons/HeaderTopIcons/InstIcon'
import ProfileIcon from '../../assets/icons/HeaderTopIcons/ProfileIcon'
import PopDownIcon from '../../assets/icons/HeaderTopIcons/PopDownIcon'

function HeaderTop() {
  return (
    <HeaderTopStyle>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex alignItems="center" gap="10px">
            <ClockIcon/> 
            <SemiSpan color="#1B1C21">
              Пн-Сб: 8:00–20:00 Вс: 9:00–20:00
            </SemiSpan>
          </Flex>

          <Flex alignItems="center" style={{gap: '15px'}}>
            <HeaderLink to="/">
                Доставка
            </HeaderLink>

            <HeaderLink to="/">
                Оплата
            </HeaderLink>

            <HeaderLink to="/">
                Отзывы
            </HeaderLink>

            <HeaderLink to="/">
                Блог
            </HeaderLink>

            <HeaderLink to="/">
              <Flex alignItems="center" gap="5px">
                  Информация
                
                <PopDownIcon/>
              </Flex>
            </HeaderLink>

            <HeaderLink to="/">
                Контакты
            </HeaderLink>
          </Flex>

          <Flex alignItems="center" >
            <Flex mr="30px" gap="15px">
              <HeaderLink to="/">
                <VkIcon />
              </HeaderLink>

              <HeaderLink to="/">
                <InstIcon/>
              </HeaderLink>
            </Flex>

            <Flex  gap="10px">
              <HeaderLink to="/">
                <ProfileIcon/>
              </HeaderLink>

              <HeaderLink to="/">
                <HeaderTopText>
                  Мои заказы
                </HeaderTopText>
              </HeaderLink>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </HeaderTopStyle>
  )
}

export default HeaderTop