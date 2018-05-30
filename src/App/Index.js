import React from "react";
import Styled from "styled-components";
import { ShowTile } from "./Components/ShowTile/ShowTile";
import { HBox } from "./Components/HBox/HBox";

const Container = Styled(HBox) `
background:#000;
min-height:100vh;
align-items:flex-start;
flex-wrap: wrap;
justify-content: space-around;
align-content: space-evenly;
`;

export class Index extends React.Component {

    constructor() {
        super();

        this.state = {
            shows: [
                {
                    showId: 9,
                    title: "Home and Away",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/tile.jpg"
                },
                {
                    showId: 10,
                    title: "Bargain Hunters",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/bargain-hunters.jpg"
                },
                {
                    showId: 11,
                    title: "House Rules",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/house-rules.jpg"
                },
                {
                    showId: 12,
                    title: "Modern Family",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/modern-family.jpg"
                },
                {
                    showId: 13,
                    title: "Seven News",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/news.jpg"
                },
                {
                    showId: 13,
                    title: "Racing",
                    coverPhoto: "https://raw.githubusercontent.com/lblaggan/Demo/master/Images/racing.jpg"
                }]
        }
    }
    render() {
        return (
            <Container>
                {this.state.shows.map((show) => {
                    return <ShowTile key={show.showId} show={show} />;
                })}
            </Container>
        );
    }
}