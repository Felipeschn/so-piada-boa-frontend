/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import microphone from "./img/mic.png";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="offset-3 col-6">
          <div className="box-landing-page">
            <img
              style={{
                marginTop: "45px",
                marginBottom: "40px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              alt={"microphone"}
              src={microphone}
              width="60px"
              height="100px"
            />
            <div className="title-landing-page">
              <p>
                SÓ <a style={{ color: "red" }}>PIADA</a> BOA
              </p>
            </div>
            <div className="text-landing-page">
              Participe da maior comunidade de piadistas do <b>Brasil. </b>
              Vote nas piadas de outros usuários e cadastre as suas próprias.
            </div>
            <div className="subtext-landing-page">
              Só não vá morrer de rir! kkk
            </div>
            <div className="button-landing-page">
              <Link
                role="button"
                className="btn btn-danger btn-lg"
                style={{ width: "275px", marginTop: "35px" }}
                to="/home"
              >
                Começar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
