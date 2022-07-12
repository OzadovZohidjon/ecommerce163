import React from 'react'
import { ModalPanelStyle, ModalStyle } from './ModalStyle';
import { Flex,Button,Box,ProductCart2 } from '../index';
import { H3, Paragraph } from '../Typography';
import GlobalIcon from '../icons/GlobalIcon';
import { icons } from './../../utils/iconsData';

function Modal({open, setOpen, products, removeCart}) {
  return (
    <ModalStyle open={open}>
        <ModalPanelStyle open={open}>
            <Flex h='100%' flexDirection="column">
                <Flex p='20px' borderBottom='1px solid #E2E4EB' alignItems="center" justifyContent="space-between">
                    <Paragraph fontSize="18px">
                        Корзина
                    </Paragraph>
                    <Button onClick={() => setOpen(false)} >
                        <GlobalIcon width='24px' height='24px' dangerouslySetInnerHTML={{__html: icons.closeIcon}}/>
                    </Button>
                </Flex>

                <Box flex='1 1 auto' overflowY="scroll">
                    {
                        products.map((item, i) => (
                            <ProductCart2 key={i} product={item} removeCart={removeCart}/>
                        ))
                    }
                </Box>
                <Box>
                    <Flex p='20px' alignItems="center" justifyContent="space-between">
                        <H3>Итого:</H3>
                        <H3>18 230 ₽</H3>
                    </Flex>
                    <Flex p='20px' backgroundColor='#F2F6F7;' alignItems="center" justifyContent="space-between">
                        <Button>Продолжить покупки</Button>
                        <Button>Оформить заказ</Button>
                    </Flex>
                </Box>
            </Flex>
        </ModalPanelStyle>
    </ModalStyle>
  )
}

export default Modal