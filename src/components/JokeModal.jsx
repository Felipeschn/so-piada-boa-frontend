import axios from "axios";
import { Modal } from "react-bootstrap";
import dateFormater from "../services/serviceDate";

const ModalConfirm = ({ open, handleClose, hightlitedJoke }) => {
  async function handleVote(voteUp, id) {
    if (voteUp) {
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
          <div className="form-group col-4">{hightlitedJoke.name}</div>
          <div
            className="form-group col-2"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              color: "green",
            }}
          >
            <i
              class="fa fa-thumbs-up"
              style={{ fontSize: "15px", marginTop: "4px" }}
            />
            &nbsp;{hightlitedJoke.likes}
          </div>
          <div
            className="form-group col-2"
            style={{ textAlign: "left", color: "red" }}
          >
            <i class="fa fa-thumbs-down" style={{ fontSize: "15px" }} />
            &nbsp;{hightlitedJoke.dislikes}
          </div>
          <div
            className="form-group col-4"
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            {`Publicada em ${dateFormater(hightlitedJoke.dt_created)}`}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <div className="row" style={{ paddingRight: "9px", margin: "20px" }}>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-success"
              onClick={() => handleVote(true, hightlitedJoke.id)}
              style={{ width: "200px", height: "38px", textAlign: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-emoji-laughing"
                viewBox="0 0.5 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z" />
              </svg>
              &nbsp;&nbsp;CHOREI
            </button>
          </div>
          <div className="col-6">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleVote(false, hightlitedJoke.id)}
              style={{ width: "200px", height: "38px", textAlign: "center" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-emoji-expressionless"
                viewBox="0 0.5 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm5 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              </svg>
              &nbsp;&nbsp;NEM RI
            </button>
          </div>
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalConfirm;
