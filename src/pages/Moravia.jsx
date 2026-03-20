import { Link } from "react-router-dom";
import "../styles/Leitura.css";

export default function Moravia() {
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
              ← Início (Home)
        </Link>
      </div>

      <main className="leitura-container">

        <p className="serie-label">
          HISTÓRIA DA IGREJA
        </p>

        <h1>A Igreja da Morávia e os 100 Anos de Oração</h1>

        <p>
          A história da Igreja da Morávia (ou Irmãos Morávios) é um poderoso testemunho 
          de fidelidade, avivamento e missões, sendo o período da vigília de oração 
          de 100 anos o auge do seu impacto global.
        </p>

        <h2>Origens e Refúgio</h2>

        <h3>A Antiga Unitas Fratrum (Século XV)</h3>
        <p>
          Os morávios são herdeiros espirituais do pré-reformador Jan Hus, martirizado em 1415, 
          que fundou a <strong>Unitas Fratrum</strong> (Unidade dos Irmãos) na Boêmia e Morávia. 
          Esta foi uma das primeiras igrejas protestantes da história.
        </p>

        <h3>O Conde Zinzendorf (Século XVIII)</h3>
        <p>
          Após séculos de perseguição, remanescentes dessa igreja antiga buscaram refúgio 
          nas terras do piedoso nobre alemão, o Conde Nikolaus Ludwig von Zinzendorf 
          (1700–1760), na Saxônia.
        </p>

        <h3>Herrnhut</h3>
        <p>
          Em 1722, esses refugiados fundaram a comunidade de <strong>Herrnhut</strong> 
          (que significa "Abrigo do Senhor" ou "Vigília do Senhor"). No entanto, tensões 
          e divisões doutrinárias logo surgiram entre os vários grupos de refugiados.
        </p>

        <h2>O Avivamento e a Vigília de 100 Anos</h2>

        <h3>O Pentecostes Morávio (1727)</h3>
        <p>
          Após um período de conflito, o Conde Zinzendorf liderou a comunidade a uma 
          profunda experiência de arrependimento e reconciliação. No dia 13 de agosto 
          de 1727, durante um culto de Santa Ceia em Herrnhut, houve um poderoso 
          derramamento do Espírito Santo — evento que chamaram de "Pentecostes da Morávia" 
          — dissolvendo as divisões e gerando uma unidade fervorosa.
        </p>

        <h3>O Relógio de Oração</h3>
        <p>
          Duas semanas depois do avivamento, em 27 de agosto de 1727, 48 membros 
          (24 homens e 24 mulheres) fizeram um pacto para orar por uma hora diária, 
          em turnos. Dessa forma, a intercessão subia a Deus 24 horas por dia, 7 dias por semana.
        </p>

        <h3>A Duração</h3>
        <p>
          Este compromisso de oração ininterrupta durou mais de 100 anos, prosseguindo até 1827. 
          Essa vigília constante tornou-se a força motriz para todo o seu ministério posterior.
        </p>

        <h2>O Legado Missionário</h2>
        <p>
          A intensidade da oração resultou em um zelo missionário sem precedentes na história protestante:
        </p>

        <ul>
          <li><strong>Pioneirismo:</strong> Os Morávios foram os precursores das missões protestantes modernas. Sessenta e cinco anos após o início da vigília, a pequena comunidade (com menos de 300 membros) já havia enviado mais de 300 missionários aos confins da Terra.</li>
          <li><strong>Sacrifício:</strong> Conhecidos pela disposição ao sacrifício total, muitos voluntariaram-se para locais perigosos (como Groenlândia e Índias Ocidentais). Há relatos de que alguns chegaram a se vender como escravos para alcançar as plantações.</li>
          <li><strong>Influência:</strong> O movimento impactou profundamente líderes como John Wesley, fundador do Metodismo, que atribuiu aos Morávios a influência decisiva para sua conversão.</li>
        </ul>

        <p>
          Em resumo, os 100 anos de oração da Igreja da Morávia não foram apenas um feito 
          de resistência, mas sim o combustível espiritual que transformou uma pequena 
          comunidade de refugiados em uma das maiores forças de evangelização mundial de seu tempo.
        </p>

        {/* BOTÕES */}
        <div className="nav-links">

          <Link to="/" className="btn-acao">
            ← Voltar para Home
          </Link>

          <button
            className="btn-acao compartilhar"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: "Igreja da Morávia - Jesus na Web",
                  text: "Confira a história dos 100 anos de oração da Igreja da Morávia.",
                  url: window.location.href,
                });
              } else {
                alert("Copie o link do navegador para compartilhar.");
              }
            }}
          >
            🔗 Compartilhar
          </button>

        </div>

      </main>

    </div>
  );
}