"use client";
import { createContext, useState } from "react";
import {
  Main,
  CardMovies,
  ImagesPoster,
  PosterPath,
  Title,
  PlayButton,
  PlayIcon,
  PosterContainer,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalTitle,
  RangeButton,
  Button,
  DownloadIcon,
} from "./CardsStyled";
import play from "public/assets/botao-play.png";
import cloudIcon from "public/assets/cloud-download.svg";

const Context = createContext();

const Cards = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const openModal = (video) => {
    setSelectedVideo(video);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Main>
      <CardMovies>
        <ImagesPoster>
          {require("../../constants/videos.json").videos.map((video, index) => (
            <div key={index}>
              <PosterContainer onClick={() => openModal(video)}>
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
      {modalOpen && selectedVideo && (
        <ModalOverlay>
          <ModalContent>
            <ModalCloseButton onClick={closeModal}>x</ModalCloseButton>
            <ModalTitle>
              <span className="title">Webnar:</span>
              <span>{selectedVideo.title}</span>
            </ModalTitle>
            <iframe
              width="400"
              height="315"
              src={selectedVideo.url}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>{" "}
            <strong>Descrição</strong>
            <h6 style={{ marginTop: "2%" }} className="dividing-line"></h6>
            <p>{selectedVideo.description}</p>
            <strong>Downloads</strong>
            <h6 style={{ marginTop: "2%" }} className="dividing-line"></h6>
            <RangeButton>
              <Button className="xls-button">
                <DownloadIcon src={cloudIcon} />
                Spreadsheet.xls
              </Button>
              <Button className="doc-button">
                <DownloadIcon src={cloudIcon} />
                Document.doc
              </Button>
              <Button className="ppt-button">
                <DownloadIcon src={cloudIcon} />
                Presentation.ppt
              </Button>
            </RangeButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Main>
  );
};
export default Cards;
