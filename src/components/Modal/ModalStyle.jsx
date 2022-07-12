import styled  from 'styled-components';

export const ModalStyle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(27, 28, 33, 0.5);
    opacity: ${props => props.open ? '1' : '0'};
    visibility: ${props => props.open ? 'visible' : 'hidden'};
    transition: all 0.3s ease;
`

export const ModalPanelStyle = styled.div`
    position: absolute;
    top: 0;
    right: ${props => props.open ? '0' : '-100%'}; 
    width: 450px;
    height: 100%;
    background-color: #fff;
    transition: all 0.3s ease;

`
