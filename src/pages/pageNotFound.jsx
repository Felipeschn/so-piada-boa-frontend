import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="text-not-found">
      <p>Esta página não existe ou foi removida.</p>
      <Link
        role="button"
        className="btn btn-primary btn-lg"
        style={{ width: "275px", marginLeft: "60px" }}
        to="/"
      >
        Página Inicial
      </Link>
    </div>
  );
};

export default PageNotFound;
