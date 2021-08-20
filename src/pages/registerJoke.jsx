import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { postJoke } from "../services/api";

const RegisterJoke = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    await postJoke(name, email, title, description).then(() =>
      setRedirect(true)
    );
  };

  return (
    <div className="container">
      {redirect ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="offset-col">
          <div className="box-page">
            <div className="box-register">
              <h1 className="header">Nova piada</h1>
              <br />
              <form className="form-inline" onSubmit={handleSave}>
                <div className="row padding-bottom">
                  <div className="form-group col-6">
                    <label className="text-inputs" for="name">
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control input-text"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label for="email" className="text-inputs">
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control input-text"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group padding-bottom">
                  <label className="text-inputs" for="title">
                    Título:
                  </label>
                  <input
                    className="form-control input-text"
                    id="title"
                    rows="7"
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div
                  className="form-group"
                  style={{ marginBottom: "15px" }}
                  required
                >
                  <label className="text-inputs" for="joke">
                    Piada:
                  </label>
                  <textarea
                    className="form-control input-text"
                    id="joke"
                    rows="7"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="form-group col-6"></div>
                  <div className="form-group col-6 align-end">
                    <div className="row">
                      <div className="col-6 align-end">
                        <Link
                          className="btn button-outline"
                          role="button"
                          to="/home"
                        >
                          Cancelar
                        </Link>
                      </div>
                      <div className="col-6 align-end">
                        <button type="submit" className="btn button-register">
                          Enviar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterJoke;
