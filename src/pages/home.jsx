/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import dateFormater from "../services/handleDate";
import { getAutoComplete, getJokes, getJokesOrdered } from "../services/api";

import { Link } from "react-router-dom";
import JokeModal from "../components/JokeModal";

const Home = () => {
  const [jokes, setJokes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [hightlitedJoke, setHightlitedJoke] = useState();
  const [orderBy, setOrderBy] = useState("");
  const [charAutoComplete, setCharAutoComplete] = useState("");

  async function load() {
    if (orderBy) {
      const response = await getJokesOrdered(orderBy);
      setJokes(response.data);
    } else {
      const response = await getJokes();
      setJokes(response.data);
    }
  }

  async function loadAutoComplete(char) {
    const response = await getAutoComplete(char);
    setJokes(response.data);
  }

  useEffect(() => {
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
              <div className="form-group col-4 text-username">{joke.name}</div>
              <div className="form-group col-2 text-thumbs-up align-end">
                <i className="thumbs-up" />
                {joke.likes}
              </div>
              <div className="form-group col-2 text-thumbs-down">
                <i className="thumbs-down" />
                {joke.dislikes}
              </div>
              <div className="form-group col-4 align-end created-text">
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
      <div className="box-page">
        <div className="box-home-inside">
          <div className="row no-gutters">
            <div className="col-6">
              <label className="search-icon">
                <input
                  className="form-control search-input"
                  onChange={(e) => setCharAutoComplete(e.target.value)}
                  placeholder="Pesquisar piada"
                  aria-describedby="basic-addon1"
                />
              </label>
            </div>
            <div className="col-3" style={{ paddingLeft: "23px" }}>
              <div className="dropdown">
                <button
                  className="button-order"
                  type="button"
                  id="dropdownMenu2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <label className="filter-icon">Ordenar</label>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => setOrderBy("asc")}
                    >
                      Data crescente
                    </button>
                  </li>
                  <li>
                    <button
                      className="dropdown-item"
                      type="button"
                      onClick={() => setOrderBy("desc")}
                    >
                      Data decrescente
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <Link role="button" className="btn button-create" to="/create">
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
    </>
  );
};
export default Home;
