import React from 'react';
import { FooterDiv, FooterSection, FooterText } from './minor/Footer/Content';

class Footer extends React.Component{
    render(){
        return(
            <FooterSection>
                <FooterDiv>
                    <FooterText>&#169; Copyright 2021 Liviu Ganea</FooterText>
                </FooterDiv>
            </FooterSection>
        );
    }
}

export default Footer;