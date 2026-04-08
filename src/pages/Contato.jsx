import React from "react";

function Contato() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/xregjgoj", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      window.location.href = "/obrigado";
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Contato</h1>

      <form onSubmit={handleSubmit} style={{ maxWidth: "500px" }}>
        
        <input
          type="text"
          name="nome"
          placeholder="Seu nome"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Seu e-mail"
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />

        <select
          name="tipo"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        >
          <option value="oracao">Pedido de Oração</option>
          <option value="contato">Contato</option>
          <option value="testemunho">Testemunho</option>
        </select>

        <textarea
          name="mensagem"
          placeholder="Escreva sua mensagem..."
          required
          style={{ display: "block", marginBottom: "10px", width: "100%", height: "120px" }}
        />

        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}

export default Contato;