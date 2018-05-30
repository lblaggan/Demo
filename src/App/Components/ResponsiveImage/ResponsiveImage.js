import React from "react";
import Styled from "styled-components";

const Image = Styled.img`
max-width:100%;
`;

export class ResponsiveImage extends React.Component {
    render() {
        return (
            <Image className={this.props.className} src={this.props.src} alt={this.props.alt}/>
        );
    }
}