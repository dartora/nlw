import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Beneficoleta" />
        </header>
        <main>
          <h1>Seu mapa de coleta de doações.</h1>
          <p>Ajudamos pessoas a fazer o bem sem olhar a quem.</p>
          {/* usa-se link aqui para não recarregar a página toda */}
          <Link to="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
