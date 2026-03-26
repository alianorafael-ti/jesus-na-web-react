import React from "react";

function LayoutEstudo({ titulo, children }) {

  const voltar = () => {
    window.history.back();
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