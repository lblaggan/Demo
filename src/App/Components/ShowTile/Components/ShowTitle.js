import React from "react";
import Styled from "styled-components";
import { ResponsiveImage } from "../../ResponsiveImage/ResponsiveImage";
import { HBox } from "../../HBox/HBox";

const Container = Styled(HBox)`
align-items:center;
padding:3px 0;
background-color:rgba(0, 0, 0, 0.3);
`;

const Title = Styled.h2`
color: #FFF;
font-weight:bold;
font-family:sans-serif;
font-size:1.5rem;
`;

const Logo = Styled(ResponsiveImage)`
max-height:50px;
padding:0 10px;
`;

export class ShowTitle extends React.Component {
    render() {
        return (
            <Container>
                <div><Logo src="https://raw.githubusercontent.com/lblaggan/Demo/master/Images/logo.png" alt="Channel 7 logo" /></div>
                <div><Title>{this.props.title}</Title></div>
            </Container>
        );
    }
}