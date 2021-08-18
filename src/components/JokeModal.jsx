import axios from "axios";
import { Modal } from "react-bootstrap";
import dateFormater from "../services/serviceDate";

const ModalConfirm = ({ open, handleClose, hightlitedJoke }) => {
  async function handleVote(upVote, id) {
    console.log("ind");
    if (upVote) {
      await axios.put(`/jokes/like/${id}`);
    } else {
      await axios.put(`/jokes/dislike/${id}`);
    }
    handleClose();
  }
  return (
    <Modal show={open} onHide={() => handleClose()}>
      <Modal.Header style={{ borderBottom: "0 none", color: "red" }}>
        <Modal.Title>{hightlitedJoke.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {hightlitedJoke.description}
        <br />
        <br />
        <div className="row">
          <div className="form-group nameLabel text-username">
            {hightlitedJoke.name}
          </div>
          <div className="form-group likeUp text-thumbs-up">
            <i className="thumbs-up" />
            {hightlitedJoke.likes}
          </div>
          <div className="form-group likeDown text-thumbs-down">
            <i className="thumbs-down" />
            {hightlitedJoke.dislikes}
          </div>
          <div className="form-group date created-text">
            {`Publicada em ${dateFormater(hightlitedJoke.dt_created)}`}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="row footer-modal">
          <div className="col-6">
            <button
              type="button"
              className="button-lilke"
              onClick={() => handleVote(true, hightlitedJoke.id)}
            >
              <label className="happy-icon">CHOREI</label>
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="button-dislilke"
              onClick={() => handleVote(false, hightlitedJoke.id)}
            >
              <label className="sad-icon">NEM RI</label>
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
