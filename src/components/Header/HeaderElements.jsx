import styled from "styled-components";
import { H5, SemiSpan } from "../Typography";
import {Link} from 'react-router-dom'
import HeaderBottom from "./HeaderBottom";

export const HeaderTopStyle = styled.div`
    background-color: #F2F3F5;
    padding: 15px 0;
`

export const HeaderTopText = styled(SemiSpan)`
    color: #505567;
    line-height: 143%;
    transition: all 0.3s ease;
    :not(:first-child){
        margin-left: 15px;
    }

    &:hover{
        color: #E2195B;
    }
`

export const SearchBar = styled.div`
    display: flex;
    width: 376px;
    padding: 10px 15px;
    border: 1px solid #D0D2D7;
    outline: none;
    border-radius: 60px;
    justify-content: space-between;
    align-items: center;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

export const SearchInput = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    color: #7D818E;
    width: 100%;
`

export const Circle = styled.div`
    width: 44px;
    height: 44px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E2E4EB;
    border-radius: 50%;
    background-color: transparent;
    position: relative;
`

export const CartCount = styled.div`
    padding:1px 5px;
    width: 20px;
    height: 20px;
    color: white;
    background-color: #E2195B;
    border-radius: 50%;
    position: absolute;
    top: -5px;
    right: -5px;
`

export const HeaderLink = styled(Link)`
    transition: all 0.3s ease;
    &:hover{
        color: #E2195B;
    }
`

export const HeaderBottomStyle = styled.div`
    padding: 20px;
    box-shadow: 0px 4px 15px rgba(34, 42, 70, 0.08);
    margin-bottom: 38px;
`