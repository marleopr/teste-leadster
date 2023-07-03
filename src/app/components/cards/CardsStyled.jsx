import styled from "styled-components";
import Image from "next/image";

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  overflow-x: hidden;
  width: 70vw;
`;

export const CardMovies = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  h2 {
    padding: 10px;
    font-weight: 600;
    &:hover {
      color: #2c83fb;
    }
  }
`;
export const ImagesPoster = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: relative;
  cursor: pointer;
`;
export const PosterContainer = styled.div`
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  &:hover {
    .play-button {
      opacity: 1;
    }
  }
`;
export const PosterPath = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(70%);
  }
`;

export const Title = styled.p`
  color: #000000;
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  font-size: 40px;
  color: #fff;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const PlayIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;
