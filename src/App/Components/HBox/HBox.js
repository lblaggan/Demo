import React from "react";
import Styled from "styled-components";

const Box = Styled.div`
display:flex;
`;

export class HBox extends React.Component {
    render() {
        return (
            <Box className={this.props.className}>{this.props.children}</Box>
        );
    }
}