import "../styles/Leitura.css";
import { Link } from "react-router-dom";

export default function Wesley() {
  return (
    <div className="container">

      {/* TOPO PADRONIZADO */}
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

        <div className="serie-header">
          Série Compositores da Harpa Cristã
        </div>

        <p className="serie-label">
          ESTUDO 3
        </p>

        <h1>🎶 Charles Wesley</h1>
        <p><em>O Poeta do Avivamento Metodista</em></p>

        <div className="info-box">
          <p><strong>Nascimento:</strong> 1707 | <strong>Falecimento:</strong> 1788</p>
          <p><strong>País:</strong> Inglaterra | <strong>Período:</strong> Século XVIII</p>
        </div>

        <h2>Charles Wesley na linha do tempo</h2>
        <p>
          Charles Wesley nasceu cerca de 30 anos após Isaac Watts.
          Enquanto Watts ajudou a transformar os Salmos em hinos cristãos,
          Wesley levou o canto congregacional a um nível ainda mais profundo.
        </p>

        <h2>O mundo em que Wesley viveu</h2>
        <p>
          Charles Wesley viveu durante o grande avivamento espiritual na Inglaterra
          conhecido como o Avivamento Metodista.
        </p>

        <h2>Influências espirituais</h2>
        <p>
          Charles Wesley foi profundamente influenciado por seu irmão John Wesley
          e pelo movimento metodista.
        </p>

        <h2>Vida pessoal</h2>
        <p>
          Charles Wesley enfrentou perseguições durante suas pregações ao ar livre
          e sofreu oposição por causa de sua mensagem evangelística.
        </p>

        <h2>O ministério através dos hinos</h2>
        <p>
          Charles Wesley escreveu mais de 6.000 hinos focados na salvação,
          na graça de Deus e na experiência pessoal com Cristo.
        </p>

        <h3>Hinos conhecidos</h3>

        <p>
          <em>Hark! The Herald Angels Sing</em><br />
          <em>Christ the Lord Is Risen Today</em><br />
          <em>O For a Thousand Tongues to Sing</em>
        </p>

        <div className="versiculo">
          “Cantarei ao Senhor por toda a minha vida.”<br />
          <small>Salmos 104:33</small>
        </div>

        <h2>Aplicação</h2>
        <p>
          A vida de Charles Wesley nos ensina que o louvor pode ser uma poderosa
          ferramenta de evangelização.
        </p>

        {/* BOTÕES FINAIS PADRONIZADOS */}
        <div className="navigation-links">

          <button
            className="btn-secundario"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Charles Wesley - Jesus na Web",
                  text: "Conheça a história de Charles Wesley.",
                  url: window.location.href,
                });
              } else {
                alert("Copie o link do navegador para compartilhar.");
              }
            }}
          >
            🔗 Compartilhar
          </button>

          <Link to="/compositores/lutero" className="btn-primario">
            Próximo Estudo: Lutero →
          </Link>

        </div>

      </main>

    </div>
  );
}