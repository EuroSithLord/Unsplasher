import styled from 'styled-components'
import robotoRegular from '../../../fonts/Roboto-Regular.woff';

export const OuterContainer = styled.div`
    width: 100%;
    background-color: #fefdfb;
    max-width: 1300px;
    padding: 60px 0 60px 0;
    margin: auto;
`

export const InnerContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

export const ContentInline = styled.div`
    display: flex;
    a:first-of-type{
    padding-right: 10px;
}
`

export const NavbarText = styled.h2`
    color: #3e012f;
    font-family: ${robotoRegular};
    margin: 0;
`

export const NavbarLink = styled.a`
    display: flex;
    align-items: center;
    height: fit-content;
    color: #3e012f;
`