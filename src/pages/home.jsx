/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import JokeModal from "../components/JokeModal";
import dateFormater from "../services/serviceDate";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [hightlitedJoke, setHightlitedJoke] = useState();
  const [orderBy, setOrderBy] = useState("");
  const [charAutoComplete, setCharAutoComplete] = useState("");

  async function load() {
    if (orderBy) {
      const response = await axios.get(`jokes/orderby/${orderBy}`);
      setJokes(response.data);
    } else {
      const response = await axios.get("jokes");
      setJokes(response.data);
    }
  }

  async function loadAutoComplete(char) {
    const response = await axios.get(`jokes/autocomplete/${char}`);
    setJokes(response.data);
  }

  useEffect(() => {
    console.log(charAutoComplete);
    if (charAutoComplete) {
      loadAutoComplete(charAutoComplete);
    } else {
      const loadData = async () => {
        await load();
      };
      loadData();
    }
  }, [openModal === true, orderBy, charAutoComplete]);

  const handleExpanedRow = (joke) => {
    setHightlitedJoke(joke);
    setOpenModal(true);
  };

  function getRow(joke) {
    const rows = [];
    const row = (
      <div
        key={joke.id}
        className="card"
        style={{ cursor: "pointer" }}
        onClick={() => handleExpanedRow(joke)}
      >
        <div className="card-body">
          <h5 className="card-title">{joke.title}</h5>
          <p className="card-text">{joke.description}</p>
          <div className="card-text">
            <div className="row">
              <div className="form-group col-4">{joke.name}</div>
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
                &nbsp;{joke.likes}
              </div>
              <div
                className="form-group col-2"
                style={{ textAlign: "left", color: "red" }}
              >
                <i class="fa fa-thumbs-down" style={{ fontSize: "15px" }} />
                &nbsp;{joke.dislikes}
              </div>
              <div
                className="form-group col-4"
                style={{ display: "flex", justifyContent: "flex-end" }}
              >
                {`Publicada em ${dateFormater(joke.dt_created)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    rows.push(row);
    return rows;
  }

  return (
    <>
      {openModal ? (
        <JokeModal
          open={hightlitedJoke}
          handleClose={() => {
            setOpenModal(false);
          }}
          hightlitedJoke={hightlitedJoke}
        />
      ) : (
        ""
      )}
      <div className="container">
        <div className="row">
          <div className="offset-col">
            <div className="box-home-page">
              <div className="box-home-inside">
                <div className="row">
                  <div className="col-8">
                    <div className="input-group">
                      <input
                        className="form-control"
                        onChange={(e) => setCharAutoComplete(e.target.value)}
                        placeholder="Pesquisar Piada"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="dropdown">
                      <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        style={{ width: "120px", borderRadius: "10px" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-filter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        &nbsp;&nbsp;Ordenar
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => setOrderBy("asc")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-sort-up-alt"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.5 13.5a.5.5 0 0 1-1 0V4.707L1.354 5.854a.5.5 0 1 1-.708-.708l2-1.999.007-.007a.498.498 0 0 1 .7.006l2 2a.5.5 0 1 1-.707.708L3.5 4.707V13.5zm4-9.5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z" />
                            </svg>
                            &nbsp;Data crescente
                          </button>
                        </li>
                        <li>
                          <button
                            className="dropdown-item"
                            type="button"
                            onClick={() => setOrderBy("desc")}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-sort-down"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.5 2.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 11.293V2.5zm3.5 1a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM7.5 6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zm0 3a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z" />
                            </svg>
                            &nbsp;Data decrescente
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-2">
                    <Link
                      role="button"
                      className="btn btn-danger"
                      style={{ width: "120px", borderRadius: "10px" }}
                      to="/create"
                    >
                      Criar piada
                    </Link>
                  </div>
                </div>
                {jokes.length > 0 ? (
                  jokes.map((e) => getRow(e))
                ) : (
                  <div className="card">
                    <div className="card-body">
                      <p className="card-text" style={{ textAlign: "center" }}>
                        {charAutoComplete
                          ? "Não existe nenhuma piada cadastrada com esse Título :/"
                          : "Nenhuma piada foi cadastrada ainda, seja o primeiro!"}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
