import styled from 'styled-components';
import robotoRegular from '../../../fonts/Roboto-Regular.woff';

export const ResultsSection = styled.div`
    width: 100%;
    max-width: 1300px;
    margin: auto;
`

export const ResultsDivGrid = styled.div`
    width: calc(100% - 20px);
    max-width: 900px;
    margin: auto;
    position: relative;
    display: grid;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    align-items: start;
`

export const ResultsPhoto = styled.img`
    width: 100%;
    height: auto;
`

export const PaginationContainer = styled.div`
    width: 100%;
    max-width: 200px;
    margin: auto;
    padding: 10px 10px 10px 10px;
`

export const PaginationNumber = styled.button`
    color: #00cec9;
    background-color: transparent;
    font-family: "${robotoRegular}";
    font-size: 14px;
    border: none;
    outline: none;
    .active-page {
        color: #3e012f;
    }
`
