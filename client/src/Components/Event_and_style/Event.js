import { FaChevronRight } from "react-icons/fa";
import Moment from "react-moment";
import EventCardLarge from "./EventCardLarge";
import { useState } from "react";
import Modal from "react-modal";

const Event = ({ event }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function handleViewEvent() {
    setModalIsOpen(true);
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="event-card">
        <h2>{event.title}</h2>

        <Moment titleFormat="MMM, D YYYY">{event.date}</Moment>

        <p className="view-container" onClick={handleViewEvent}>
          View
          <FaChevronRight className="view-event-icon" />
        </p>
      </div>

      {modalIsOpen ? (
        <>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className="Modal"
            overlayClassName="Overlay"
            ariaHideApp={false}
          >
            <EventCardLarge event={event} />
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default Event;
