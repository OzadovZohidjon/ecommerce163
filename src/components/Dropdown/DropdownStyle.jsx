import styled from 'styled-components';

export const DropdownStyle = styled.div`
    position: relative;
    width: auto;
`

export const DropdownPanelStyle = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    padding: 20px;
    min-width: 200px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #FFFFFF;
    border: 1px solid #F2F6F7;
    box-shadow: 0px 10px 30px rgba(34, 42, 70, 0.1);
    border-radius: 10px;
    z-index: 100;
    opacity: ${(props) => props.open ? 1 : 0};
    visibility: ${(props) => props.open ? 'visible' : 'hidden'} ;
    transition: all .3s ease;

`
