import React from 'react';
import { OuterContainer, InnerContainer, NavbarText, NavbarLink, ContentInline } from './minor/Navbar/Content';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class Navbar extends React.Component{
    render(){
        return(
            <OuterContainer>
                <InnerContainer>
                    <NavbarText>Horror Splasher</NavbarText>
                    <ContentInline>
                        <NavbarLink href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} style={{fontSize: '30px'}}/></NavbarLink>
                        <NavbarLink href='https://www.twitter.com/'><FontAwesomeIcon icon={faTwitter} style={{fontSize: '30px'}}/></NavbarLink>
                    </ContentInline>
                </InnerContainer>
            </OuterContainer>
        );
    }
}

export default Navbar;