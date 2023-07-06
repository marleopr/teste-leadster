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
  CardDividerTop,
  CardDividerBottom,
} from "./CardsStyled";
import play from "public/assets/botao-play.png";
import cloudIcon from "public/assets/cloud-download.svg";
import Pagination from "../../hooks/pagination";
import PropTypes from "prop-types";
const Context = createContext();

const Cards = ({ videos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    videos && videos.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(videos.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <CardDividerTop />
        <ImagesPoster>
          {currentItems &&
            currentItems.map((video, index) => (
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
        <CardDividerBottom />
      </CardMovies>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

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
Cards.propTypes = {
  videos: PropTypes.array.isRequired,
};
export default Cards;
