import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LayoutEstudo({ titulo, children }) {

  const navigate = useNavigate();
  const location = useLocation();

  const voltar = () => {
    // pega de onde o usuário veio
    const origem = location.state?.from;

    if (origem) {
      navigate(origem, { replace: true });
    } else {
      navigate("/", { replace: true }); // fallback (home)
    }
  };

  const compartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: titulo,
        text: "Confira este conteúdo:",
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copiado!");
    }
  };

  return (
    <div className="pagina-estudo">
      
      <div className="topo-estudo">
        <button onClick={voltar}>← Voltar</button>
        <button onClick={compartilhar}>Compartilhar</button>
      </div>

      <h1 className="titulo-estudo">{titulo}</h1>

      <div className="conteudo-estudo">
        {children}
      </div>

    </div>
  );
}

export default LayoutEstudo;