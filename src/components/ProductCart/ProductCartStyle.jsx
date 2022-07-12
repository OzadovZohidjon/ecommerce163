import styled from 'styled-components'
import { Flex } from '../Flex'
import { H5, H6 } from '../Typography'

export const ProductCartStyle = styled(Flex)`
    width: 23%;
    height: 430px;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
`

export const ProductCart1ContentStyle = styled.div`
    height: 40%;
    border: 1px solid #e2e4eb;
    border-top: 0;
    border-radius: 0 0 5px 5px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductCartOldPrice = styled(H6)`
    text-decoration: line-through;
    font-weight: 400;
    color: #b0b2b9;
`

export const ProductCartBtn = styled.button`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 15px;
    background-color: #e2195b;
    color: white;
    font-size: 14px;
    line-height: 20px;
    border: 1px solid #e2195b;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: transparent;
        color: #e2195b;

        path {
            fill: #e2195b;
            stroke: #e2195b;
        }
    }
`
export const ProductCart2Style = styled.div`
    display: flex;
    align-items: start;
    padding: 20px;
    gap: 15px;
`
