import React from 'react'
import { Link } from 'react-router-dom'
import DiscountIcon from '../../assets/icons/DiscountIcon'
import PopDownIcon from '../../assets/icons/HeaderTopIcons/PopDownIcon'
import { Container } from '../Container'
import { Flex } from '../Flex'
import { H5, SemiSpan } from '../Typography'
import { HeaderBottomLink, HeaderLink, HeaderBottomStyle } from './HeaderElements'


function HeaderBottom() {
  return (
    <HeaderBottomStyle>
      <Container>
        <Flex alignItems="center" justifyContent="space-between">
          <Flex>
            <DiscountIcon/>

              <H5 color="#E2195B" ml="10px">
                АКЦИИ
              </H5>

          </Flex>

          <Flex>
            <HeaderLink to="/">
              <H5>
                Цветы поштучно
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>
          <Flex>
            <HeaderLink to="/">
              <H5>
                Розы
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>
          <Flex>
            <HeaderLink to="/">
              <H5>
                Букеты
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>
          <Flex>
            <HeaderLink to="/">
              <H5>
                Композиции
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>
          <Flex>
            <HeaderLink to="/">
              <H5>
                Подарки
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>
          <Flex>
            <HeaderLink to="/">
              <H5>
                Шары
              </H5>
            </HeaderLink>

            <PopDownIcon/>
          </Flex>

          <HeaderLink to="/">
            <H5>
              Свадебные букеты
            </H5>
          </HeaderLink>

          <HeaderLink to="/">
            <H5>
              Повод
            </H5>
          </HeaderLink>
        </Flex>
      </Container>
    </HeaderBottomStyle>
  )
}

export default HeaderBottom