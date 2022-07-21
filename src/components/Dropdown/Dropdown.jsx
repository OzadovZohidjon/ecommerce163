import React, {useState} from 'react'
import { DropdownPanelStyle, DropdownStyle } from './DropdownStyle';
import { Flex } from '../index';
import { HeaderLink } from './../Header/HeaderElements';
import { H5 } from '../Typography';
import PopDownIcon from './../../assets/icons/HeaderTopIcons/PopDownIcon';

function Dropdown({ item, ...props }) {
    const [open, setOpen] = useState(false)

    function mouseEnterHandler() {
        setOpen(true)
    }

    function mouseLeaveHandler() {
        setOpen(false)
    }

  return (
      <DropdownStyle
          onMouseEnter={() => mouseEnterHandler()}
          onMouseLeave={() => mouseLeaveHandler()}
      >
        <Flex
            key={item.id}
            
        >
            <HeaderLink to={`/category/${item.slug}`}>
                <H5>
                    {item.name_ru}
                </H5>
            </HeaderLink>
            <PopDownIcon/>
        </Flex>
          
          <DropdownPanelStyle open={open}>
              {
                  item.children.map(child => {
                      return (
                        <HeaderLink key={child.id} to={`/category/${child.slug}`}>
                            <H5>
                                {child.name_ru}
                            </H5>
                        </HeaderLink>
                      )
                  })
            }
        </DropdownPanelStyle>
    </DropdownStyle>
  )
}

export default Dropdown