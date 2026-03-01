import { Link } from "react-router-dom";
import "../styles/Card.css";

export default function Card({ titulo, texto, link, imagem }) {
  return (
    <Link to={link} className="card-link">
      <div className="card">

        <img src={imagem} alt={titulo} className="card-img" />

        <div className="card-conteudo">
          <h3>{titulo}</h3>
          <p>{texto}</p>
          <span className="card-botao">Ver mais</span>
        </div>

      </div>
    </Link>
  );
}