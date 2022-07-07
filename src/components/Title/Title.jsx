import React from 'react'
import { Link } from 'react-router-dom'
import { icons } from '../../utils/iconsData'
import { Flex } from '../Flex'
import GlobalIcon from '../icons/GlobalIcon'
import { H1 } from '../Typography'

export default function Title({title, link, ...props}) {
  return (
    <Flex alignItems="center" justifyContent="space-between" mb="30px"> 
        <H1 color={props.color}>{title}</H1>

        <Link to={link}>
            <GlobalIcon width={16} height={10} dangerouslySetInnerHTML={{__html: icons.arrowRight}}/>
        </Link>
    </Flex>
  )
}
