import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <div id="header-area">
      <div className="logo-area">
        <a href="">
          <img
            src="https://i.ibb.co/7nDkxvj/football-161132-1280.png"
            alt="Logo Futebol Angolano"
          />
          <p>
            <span>F</span>
            <span>A</span>
          </p>
        </a>
      </div>
      <nav id="menu">
      <i className="bi bi-list"></i>
        <ul>
          <li>
            <a href="#">
              <p>
                <i className="bi bi-trophy-fill trophy-icon"></i>
              </p>
              <p>Classificação</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i className="bi bi-graph-up graph-icon"></i>
              </p>
              <p>Vista Geral</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i className="bi bi-calendar-event-fill calendar-icon"></i>
              </p>
              <p>Jogos</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i className="bi bi-bar-chart-fill bar-chart-icon"></i>
              </p>
              <p>Estatísticas</p>
            </a>
          </li>
          <li>
            <a href="#">
              <p>
                <i className="bi bi-newspaper newspaper-icon"></i>
              </p>
              <p>Notícias</p>
            </a>
          </li>
        </ul>
      </nav>
      <div className="about-area">
        <a href="">Sobre</a>
        <a href="">Contacto</a>
      </div>
    </div>
  );
}
