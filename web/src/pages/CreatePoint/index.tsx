import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import { FiArrowLeft } from "react-icons/fi";
import "./styles.css";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={Logo} alt="Beneficoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para página inicial
        </Link>
      </header>

      <form action="">
        <h1>
          Cadastro do <br />
          ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input type="text" name="whatsapp" id="whatsapp" />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais ítens no mapa</span>

            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado(UF)</label>
                <select id="uf" name="uf">
                  <option value="0">Selecione</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select id="city" name="city">
                  <option value="0">Selecione</option>
                </select>
              </div>
            </div>
          </legend>
        </fieldset>
        <fieldset>
          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="teste" />
              <span>texto da imagem, e.g. oleo</span>
            </li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default CreatePoint;
