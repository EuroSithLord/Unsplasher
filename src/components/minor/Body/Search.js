import styled from'styled-components';
import robotoRegular from '../../../fonts/Roboto-Regular.woff';

export const SearchDiv = styled.div`
    width: calc(100% - 20px);
    display: flex;
    border: 1px solid #ccc;
    border-radius: 20px;
    background-color: white;
    margin: auto;
`

export const SearchTitle = styled.h1`
    color: #3e012f;
    margin: 0;
    margin-bottom: 40px;
    font-family: ${robotoRegular};
    text-align: center;
`

export const SearchInput = styled.input`
    border: none;
    background: transparent;
    width: 80%;
    outline: none;
    padding: 5px 10px 8px 15px;
    overflow: hidden;
    color: #3e012f;
    font-size: 25px;
    font-family: ${robotoRegular};
`

export const SearchSection = styled.div`
    width: 100%;
    max-width: 800px;
    margin: auto;
    padding: 0px 0px 150px 0px;
`

export const SearchButton = styled.button`
    background-color: #3e012f;
    color: #ffffff;
    text-align: center;
    padding: 7.5px 0px 7.5px 0px;
    border: none;
    border-radius: 0px 20px 20px 0px;
    outline:none;
    width: 30%;
    font-size: 20px;
    :hover{
        cursor: pointer;
    }
`

export const SearchKeywords = styled.div`
    margin-top: 10px;
    width: 100%;
    padding: 0px 15px 0px 15px;
`

export const Keyword = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    color: #3e012f;
    padding: 7.5px 5px 7.5px 5px;
    border-radius: 3px;
    font-family: ${robotoRegular};
    font-size: 15px;
`

export const ModalText = styled.p`
    color: #3e012f;
    font-size: 13px;
    font-family: font-family: ${robotoRegular};
`

export const DrawerButton = styled.button`
    color: #3e012f;
    font-size: 13px;
    background-color: transparent;
    outline: 0;
    border: 0;
    cursor: pointer;
    font-family: font-family: ${robotoRegular};
`