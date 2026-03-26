import React from "react";
import "../styles/Estudos.css";

export default function Estudos() {

  const compartilhar = () => {
    const url = window.location.href;
    const texto = "📖 Estudo Bíblico: Rock e Adoração\n\nVale a pena ler!";

    if (navigator.share) {
      navigator.share({
        title: "Estudo Bíblico",
        text: texto,
        url: url,
      });
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(texto + " " + url)}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="pagina-estudo">

      {/* Título */}
      <section className="topo-estudo">
        <h1>🎸 Rock e Adoração: Isso Glorifica a Deus?</h1>
        <h3>Um Estudo Bíblico Sobre Música, Ego e Verdadeira Adoração</h3>
      </section>

      {/* Conteúdo */}
      <section className="conteudo-estudo">

        <h2>🎸 A Pergunta Sincera</h2>
        <p>
          Muitos cristãos apreciam o rock e, após a conversão, passam a ouvir
          rock cristão. Mas surge uma pergunta importante: o rock pode ser
          verdadeira adoração ou pode se tornar apenas música religiosa que
          alimenta o ego?
        </p>

        <p>
          A Bíblia nos ensina que Deus não procura apenas músicas bonitas ou
          estilos específicos. Deus procura adoradores sinceros.
        </p>

        <blockquote>
          "Mas a hora vem, e agora é, em que os verdadeiros adoradores adorarão
          o Pai em espírito e em verdade; porque o Pai procura a tais que assim
          o adorem." <br />
          <strong>João 4:23</strong>
        </blockquote>

        <p>
          O problema não está apenas no estilo musical, mas no que acontece
          dentro do coração enquanto adoramos.
        </p>

        <h2>1. 🎵 Música Não é o Mesmo que Adoração</h2>

        <h4>Música Sem Adoração</h4>
        <p>
          É possível cantar músicas cristãs sem realmente adorar...
        </p>

        <blockquote>
          "Este povo honra-me com os lábios, mas o seu coração está longe de mim."
          <br />
          <strong>Mateus 15:8</strong>
        </blockquote>

        <h4>Adoração Verdadeira</h4>
        <p>
          A verdadeira adoração acontece quando o coração se rende a Deus.
        </p>

        <blockquote>
          "Rogo-vos, pois, irmãos, que apresenteis os vossos corpos como
          sacrifício vivo..."
          <br />
          <strong>Romanos 12:1</strong>
        </blockquote>

        <p className="destaque">
          💡 Reflexão: Cantar é fácil. Adorar exige entrega.
        </p>

        <h2>2. 🔥 O Perigo do Ego</h2>

        <p>
          O rock é um estilo intenso e expressivo...
        </p>

        <blockquote>
          "Nada façais por contenda ou por vanglória..."
          <br />
          <strong>Filipenses 2:3</strong>
        </blockquote>

        <div className="tabela-comparacao">
          <div>
            <h4>Quando Deus é o Centro</h4>
            <ul>
              <li>Deus é exaltado</li>
              <li>Existe reverência</li>
              <li>Existe entrega</li>
              <li>O coração se rende</li>
            </ul>
          </div>

          <div>
            <h4>Quando o Ego é o Centro</h4>
            <ul>
              <li>Os músicos são exaltados</li>
              <li>Existe espetáculo</li>
              <li>Existe exibição</li>
              <li>O ego se alimenta</li>
            </ul>
          </div>
        </div>

        <h2>🎯 A Verdadeira Pergunta</h2>

        <blockquote>
          "Portanto, quer comais, quer bebais..."
          <br />
          <strong>1 Coríntios 10:31</strong>
        </blockquote>

        <p>
          O rock pode ser apenas música ou pode ser adoração.
        </p>

        <p className="pergunta-final">
          Isso está me levando a adorar a Deus ou apenas a sentir emoção?
        </p>

      </section>

      {/* ✅ AÇÕES (CORRIGIDO AQUI) */}
      <section className="acoes-estudo">

        <button 
          className="btn-secundario" 
          onClick={() => window.history.back()}
        >
          ← Voltar
        </button>

        <button 
          className="btn-principal" 
          onClick={compartilhar}
        >
          🔗 Compartilhar
        </button>

      </section>

      <p className="rodape-estudo">
        Estudo bíblico sobre música e adoração cristã.
      </p>

    </div>
  );
}