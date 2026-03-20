import { Link } from "react-router-dom";
import "../styles/Leitura.css";

export default function Watts() {
  return (
    <div className="container">

      {/* TOPO - Com link para a Home */}
      <div className="nav-top">
        <div className="brand">
          <div className="logo">JW</div>

          <div>
            <div className="brand-title">Jesus na Web</div>
            <div className="brand-sub">Promovendo a sã doutrina</div>
          </div>
        </div>

        <Link to="/" className="btn-voltar">
              ← Início (Home)
        </Link>
      </div>

      <main className="leitura-container">

        <p className="serie-label">
          SÉRIE COMPOSITORES DA HARPA CRISTÃ
        </p>

        <p className="serie-label">
          ESTUDO 2
        </p>

        <h1>🎶 Isaac Watts</h1>

        <p>
          <em>O Pai do Hino Congregacional Evangélico</em>
        </p>

        <div className="info-box">
          <p><strong>Nascimento:</strong> 1674 | <strong>Falecimento:</strong> 1748</p>
          <p><strong>País:</strong> Inglaterra | <strong>Período:</strong> Século XVII–XVIII</p>
        </div>

        <h2>Isaac Watts na linha do tempo da Reforma</h2>
        <p>
          Isaac Watts nasceu cerca de 130 anos após a morte de Martinho Lutero. 
          Enquanto Lutero lançou os fundamentos do canto congregacional na Reforma, 
          Watts deu maturidade poética e teológica a essa herança.
        </p>

        <h2>Como eram os hinos antes de Watts</h2>
        <p>
          Antes de Isaac Watts, as igrejas reformadas cantavam quase exclusivamente 
          os Salmos metrificados, traduções literais dos Salmos adaptadas para rima e métrica.
        </p>
        
        <blockquote style={{ fontStyle: 'italic', borderLeft: '4px solid #ccc', paddingLeft: '10px' }}>
          <strong>O que são Salmos metrificados?</strong><br />
          São textos bíblicos dos Salmos transformados em versos cantáveis. Apesar de fiéis 
          às Escrituras, tinham linguagem rígida, pouca poesia e quase nenhuma referência direta à obra de Cristo.
        </blockquote>

        <h2>A revolução espiritual de Isaac Watts</h2>
        <p>
          Watts passou a reinterpretar os Salmos à luz do Novo Testamento, introduzindo hinos 
          claramente cristocêntricos, devocionais e doutrinários. Sua pergunta ecoa até hoje: 
          <strong> “Se somos cristãos, por que cantamos como se Cristo ainda não tivesse vindo?”</strong>
        </p>

        <h2>O mundo em que Watts viveu</h2>
        <p>
          Ele viveu na Inglaterra pós-Reforma, marcada por perseguições aos dissidentes religiosos, 
          conflitos com a Igreja oficial e o início do Iluminismo.
        </p>

        <h2>Vida pessoal e dificuldades</h2>
        <p>
          Isaac Watts teve saúde frágil durante quase toda a vida. Nunca se casou, enfrentou 
          crises emocionais e passou longos períodos afastado do ministério ativo.
        </p>

        <h2>Vitórias e frutos</h2>
        <p>
          Mesmo limitado fisicamente, escreveu mais de 600 hinos, entre eles:<br />
          • <em>When I Survey the Wondrous Cross</em><br />
          • <em>Joy to the World</em><br />
          • <em>O God, Our Help in Ages Past</em>
        </p>

        <h2>Legado espiritual</h2>
        <p>
          Embora não apareça diretamente na Harpa Cristã, Isaac Watts moldou o espírito do 
          louvor evangélico moderno: cristocêntrico, bíblico e congregacional.
        </p>

        <div className="versiculo">
          "A palavra de Cristo habite em vós abundantemente." <br />
          <small>Colossenses 3:16</small>
        </div>

        <h2>Aplicação para nossas vidas</h2>
        <p>
          A história de Isaac Watts nos lembra que Deus usa pessoas frágeis para produzir 
          frutos eternos. O louvor que cantamos molda a fé que vivemos.
        </p>

        {/* BOTÕES DE NAVEGAÇÃO */}
        <div className="nav-links">

          {/* Volta para o estudo anterior (Lutero) */}
          <Link to="/compositores/lutero" className="btn-acao">
            ← Voltar para Lutero
          </Link>

          <button
            className="btn-acao compartilhar"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Isaac Watts - Jesus na Web",
                  text: "Confira a história de Isaac Watts, o pai do hino congregacional.",
                  url: window.location.href,
                });
              } else {
                alert("Copie o link do navegador para compartilhar.");
              }
            }}
          >
            🔗 Compartilhar
          </button>

          {/* Próximo estudo (conforme seu App.jsx, seria o Wesley) */}
          <Link to="/compositores/wesley" className="btn-acao proximo">
            Próximo: Charles Wesley →
          </Link>

        </div>

      </main>

    </div>
  );
}