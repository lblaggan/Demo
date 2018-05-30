import React from "react";
import { ShowTitle } from "./Components/ShowTitle";
import {ResponsiveImage} from "../ResponsiveImage/ResponsiveImage";

import Styled from "styled-components";

const TileBox = Styled.div`
position:relative;
width:100%;
flex-shrink:0;
max-width:380px;
margin-bottom:10px;

@media (max-width: 768px) {
    max-width:350px;
  }

@media (max-width: 600px) {
    max-width:425px;
  }
`;

const TitleWrapper = Styled.div`
  position: absolute;
bottom:0;
left:0;
right:0;
`;
export class ShowTile extends React.Component {

    render() {
        return (
            <TileBox>
                <div>
                    <ResponsiveImage src={this.props.show.coverPhoto} alt={this.props.show.title} />
                </div>
                <TitleWrapper>
                    <ShowTitle title={this.props.show.title} />
                </TitleWrapper>
                
            </TileBox>
        );
    }
}