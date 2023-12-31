import { useState, useEffect } from "react";
// @ts-ignore
import Modal from "../ui/Modal.jsx";
// @ts-ignore
import tmdbApi, { category } from "../api/tmdbApi.js";

const HeroSliderTrailerModal = ({
  movieId,
  modalIsOpen,
  closeTrailerModal,
}: {
  movieId: number;
  modalIsOpen: boolean;
  closeTrailerModal: () => void;
}) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const xx = async () => {
      const videos = await tmdbApi.getVideos(category.movie, movieId);
      if (videos.results.length > 0) {
        setVideoSrc("https://www.youtube.com/embed/" + videos.results[0].key);
      }
    };
    xx();
  }, [movieId]);

  const closeModal = () => {
    closeTrailerModal();
  };

  return (
    <Modal isOpen={modalIsOpen} onClose={closeModal}>
      <iframe
        className="w-[900px] h-[500px]"
        title="trailer"
        src={videoSrc}
      ></iframe>
    </Modal>
  );
};

export default HeroSliderTrailerModal;
