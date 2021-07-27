import React, { useState } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";

const RegisterJoke = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    axios
      .post("jokes", {
        name,
        email,
        title,
        description,
      })
      .then(() => setRedirect(true));
  };

  return (
    <div className="container">
      {redirect ? <Redirect to="/home" /> : ""}
      <div className="row">
        <div className="offset-col">
          <div className="box-background">
            <div className="box-register-page">
              <h1 style={{ color: "red" }}>Nova piada</h1>
              <br />
              <form className="form-inline" onSubmit={handleSave}>
                <div className="row" style={{ paddingBottom: "10px" }}>
                  <div className="form-group col-6">
                    <label style={{ paddingBottom: "5px" }} for="name">
                      Nome:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col-6">
                    <label for="email" style={{ paddingBottom: "5px" }}>
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group" style={{ paddingBottom: "10px" }}>
                  <label style={{ paddingBottom: "5px" }} for="title">
                    Título:
                  </label>
                  <input
                    className="form-control"
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
                  <label style={{ paddingBottom: "5px" }} for="joke">
                    Piada:
                  </label>
                  <textarea
                    className="form-control"
                    id="joke"
                    rows="7"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
                <div className="row">
                  <div className="form-group col-6"></div>
                  <div
                    className="form-group col-6"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <div className="row">
                      <div className="col-6">
                        <Link
                          className="btn btn-outline-danger btn-lg"
                          role="button"
                          to="/home"
                        >
                          Cancelar
                        </Link>
                      </div>
                      <div
                        className="col-6"
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          paddingLeft: "0px",
                        }}
                      >
                        <button type="submit" className="btn btn-danger btn-lg">
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
