import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
    width: 100%;
    background-color: #fdf3eb;
    padding: 60px 0px 60px 0px;
`

const HeroBannerText = styled.h1`
    margin: 0;
`

const HeroBanner = () => {
        return(
            <HeroContainer>
                    {/*<HeroBannerText>We'll Unsplash you with images all day long.</HeroBannerText> */}
            </HeroContainer>
        );
}

export default HeroBanner;