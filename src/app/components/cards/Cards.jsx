"use client";
import { createContext } from "react";
import {
  Main,
  CardMovies,
  ImagesPoster,
  PosterPath,
  Title,
  PlayButton,
  PlayIcon,
  PosterContainer,
} from "./CardsStyled";
import play from "../../../../public/assets/botao-play.png";

const Context = createContext();

const Cards = () => {
  return (
    <Main>
      <CardMovies>
        <ImagesPoster>
          {require("./videos.json").videos.map((video, index) => (
            <div key={index}>
              <PosterContainer>
                <PosterPath src={video.image} alt={video.title} />
                <PlayButton className="play-button">
                  <PlayIcon src={play} alt="Play" />
                </PlayButton>
                <h2>{video.title}</h2>
              </PosterContainer>
            </div>
          ))}
        </ImagesPoster>
      </CardMovies>
    </Main>
  );
};
export default Cards;
