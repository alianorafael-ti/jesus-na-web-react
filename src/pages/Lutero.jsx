import { Link } from "react-router-dom";
import "../styles/Leitura.css";

export default function Lutero() {
  return (
    <div className="container">

      {/* TOPO */}
      <div className="nav-top">
        <div className="brand">
          <div className="logo">JW</div>

          <div>
            <div className="brand-title">Jesus na Web</div>
            <div className="brand-sub">Promovendo a sã doutrina</div>
          </div>
        </div>

        <Link to="/" className="btn-voltar">
          ← Home
        </Link>
      </div>

      <main className="leitura-container">

        <p className="serie-label">
          SÉRIE COMPOSITORES DA HARPA CRISTÃ
        </p>

        <p className="serie-label">
          ESTUDO 1
        </p>

        <h1>🎶 Martinho Lutero</h1>

        <p>
          <em>O Início da Música Congregacional Protestante</em>
        </p>

        <div className="info-box">
          <p><strong>Nascimento:</strong> 1483 | <strong>Falecimento:</strong> 1546</p>
          <p><strong>País:</strong> Alemanha | <strong>Período:</strong> Século XV–XVI</p>
        </div>

        <h2>Contexto Histórico e da Igreja</h2>
        <p>
          Martinho Lutero viveu em um tempo de profundas transformações. Naquela época,
          a Igreja exercia domínio absoluto, o culto era em latim e a Bíblia era
          inacessível ao povo. A Reforma Protestante surgiu para restaurar a centralidade
          das Escrituras e a salvação pela graça.
        </p>

        <h2>Vida e Chamado</h2>
        <p>
          Como monge agostiniano, Lutero vivia atormentado pela culpa até compreender
          que a justificação vem pela fé. Ele entendeu que a fé precisava ser ensinada
          de forma clara, e a música tornou-se o meio essencial para essa democratização
          do ensino bíblico.
        </p>

        <h2>Contribuição para a Harpa Cristã</h2>
        <p>
          Lutero defendeu o canto em língua popular. Seu hino mais icônico,
          “Castelo Forte”, baseado no Salmo 46, atravessou os séculos e é uma das
          pedras angulares da hinologia protestante, presente até hoje na Harpa Cristã.
        </p>

        <div className="versiculo">
          "O justo viverá pela fé." <br />
          <small>Romanos 1:17</small>
        </div>

        <h2>Legado e Aplicação</h2>
        <p>
          O legado de Lutero nos lembra que a música deve servir à verdade bíblica e
          que cantar é confessar a nossa fé. Quando a Igreja canta com entendimento,
          ela proclama o Evangelho com uma só voz.
        </p>

        <p>
          <em>
            👉 Nos próximos estudos, seguiremos cronologicamente, aprofundando
            essa rica herança da fé cantada.
          </em>
        </p>

        {/* BOTÕES */}
        <div className="nav-links">

          <Link to="/compositores/wesley" className="btn-acao">
            ← Estudo anterior
          </Link>

          <button
            className="btn-acao compartilhar"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Martinho Lutero - Jesus na Web",
                  text: "Confira a história de Martinho Lutero.",
                  url: window.location.href,
                });
              } else {
                alert("Copie o link do navegador para compartilhar.");
              }
            }}
          >
            🔗 Compartilhar
          </button>

          <Link to="/compositores/watts" className="btn-acao proximo">
            Próximo estudo →
          </Link>

        </div>

      </main>

    </div>
  );
}