/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import microphoneLogo from "./img/mic.png";
import microphone from "./img/mic2.png";

import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <img className="microphone" src={microphone} alt={""} />
      <div className="box-landing-page">
        <div className="ha1">HA</div>
        <div className="ha2">HA</div>
        <div className="ha3">HA</div>
        <div className="ha4">HA</div>
        <img
          className="microphoneLogo"
          alt={"microphone"}
          src={microphoneLogo}
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
        <div className="subtext-landing-page">Só não vá morrer de rir! kkk</div>
        <Link
          role="button"
          className="btn btn-lg button-landing-page"
          to="/home"
        >
          Começar
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
