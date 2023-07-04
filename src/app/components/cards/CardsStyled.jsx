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
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  padding: 5px;
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
  position: relative;
  border: solid red;
  border-radius: 10px;
  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 10px 20px 0 rgba(0, 0, 0, 0.19);
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 80px;
  font-size: 40px;
  color: #fff;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s;
`;

export const PlayIcon = styled(Image)`
  width: 60px;
  height: 60px;
`;
export const ModalOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: solid greenyellow;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: relative;
  width: 450px;
  height: 670px;
  border-radius: 10px;
  border-top: solid #0084ff;
  background-color: #fff;
  iframe {
    width: 100%;
    margin-bottom: 10px;
  }
  .dividing-line {
    text-align: center;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  strong {
    margin: 10px;
  }
  p {
    margin-left: 10px;
    margin-bottom: 10px;
  }
  h6 {
    margin-left: 10px;
    margin-bottom: 5px;
  }
`;
export const ModalCloseButton = styled.button`
  position: absolute;
  outline: none;
  font-size: 20px;
  top: 1px;
  right: 10px;
  border: none;
  color: #555555;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #0084ff;
  }
`;
export const ModalTitle = styled.h2`
  font-weight: 600;
  padding: 35px 60px 20px 60px;
  .title {
    color: #0084ff;
    margin-right: 5px;
  }
`;

export const RangeButton = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  font-size: 10px;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  padding-left: 30px;
  margin: 5px;
  cursor: pointer;
  &.xls-button {
    background: rgb(159, 239, 223);
    background: linear-gradient(
      90deg,
      rgba(159, 239, 223, 1) 25%,
      rgba(194, 244, 234, 1) 25%
    );
    &:hover {
      color: #000000;
    }
    &:active {
      background: rgb(159, 239, 223);
      background: linear-gradient(
        90deg,
        rgba(159, 239, 223, 1) 100%,
        rgba(159, 239, 223, 1) 100%
      );
    }
    color: #005c2c;
  }
  &.doc-button {
    background: rgb(161, 217, 255);
    background: linear-gradient(
      90deg,
      rgba(161, 217, 255, 1) 25%,
      rgba(194, 230, 255, 1) 25%
    );
    color: #0a6bc5;
    &:hover {
      color: #000000;
    }
    &:active {
      background: rgb(161, 217, 255);
      background: linear-gradient(
        90deg,
        rgba(161, 217, 255, 1) 100%,
        rgba(194, 230, 255, 1) 100%
      );
    }
  }
  &.ppt-button {
    background: rgb(255, 241, 160);
    background: linear-gradient(
      90deg,
      rgba(255, 241, 160, 1) 25%,
      rgba(255, 248, 208, 1) 25%
    );
    color: #9d870d;
    &:hover {
      color: #000000;
    }
    &:active {
      background: rgb(255, 241, 160);
      background: linear-gradient(
        90deg,
        rgba(255, 241, 160, 1) 100%,
        rgba(255, 241, 160, 1) 100%
      );
    }
  }
`;
export const DownloadIcon = styled(Image)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 5px;
  right: 5px;
  transform: translateY(-50%);
`;
