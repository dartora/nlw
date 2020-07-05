import React from "react";
import "./style.css";
import logo from "../../assets/logo.svg";
import { FiLogIn } from "react-icons/fi";

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

          <a href="/cadastro">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre um ponto de coleta</strong>
          </a>
        </main>
      </div>
    </div>
  );
};

export default Home;
