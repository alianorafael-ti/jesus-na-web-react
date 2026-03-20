import "../styles/CompositoresIntro.css";
import { Link } from "react-router-dom";

export default function CompositoresIntro() {
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

        <div className="serie-header">
          Série Compositores da Harpa Cristã
        </div>

        <p className="introducao-label">
          INTRODUÇÃO
        </p>

        <h1>
          A História por Trás dos Hinos que Cantamos
        </h1>

        <p>
          Ao longo dos cultos cristãos, milhões de vozes se unem para cantar hinos que atravessaram gerações. 
          Suas melodias são familiares, suas letras estão gravadas na memória da Igreja, mas, paradoxalmente, 
          suas origens são pouco conhecidas. Quem escreveu esses hinos? Em que contexto nasceram? Que lutas, 
          dores, avivamentos e esperanças deram forma às palavras que ainda hoje proclamamos?
        </p>

        <p>
          Esta série nasce com o propósito de despertar o interesse pela história dos hinos cristãos, 
          especialmente daqueles que compõem a <span className="destaque-texto">Harpa Cristã</span>. 
          Não se trata apenas de música, mas de fé cantada, de teologia expressa em versos, de testemunhos 
          que ecoam através do tempo. Cada hino carrega consigo a marca de seu autor e do mundo em que ele viveu.
        </p>

        <h2>O Legado da Reforma</h2>

        <p>
          Antes da Reforma Protestante, a música no culto cristão era, em grande parte, restrita ao clero e aos coros. 
          O povo assistia, mas não participava. A fé era ouvida, não cantada pela congregação. Foi somente com a Reforma 
          do século XVI que o canto congregacional passou a ocupar um lugar central, tornando-se um poderoso instrumento 
          de ensino bíblico, adoração e proclamação do Evangelho.
        </p>

        <p>
          Ao longo desta série, o leitor será conduzido por uma linha cronológica, dos compositores mais antigos aos mais 
          contemporâneos, sempre situados em seu contexto histórico mundial e eclesiástico. O objetivo não é esgotar o assunto, 
          mas instigar: provocar curiosidade, despertar reverência e incentivar um mergulho mais profundo na história da Igreja 
          e da música cristã.
        </p>

        <p>
          Este conteúdo, apresentado de forma introdutória no site, é uma preparação natural para um estudo mais amplo e 
          aprofundado, que futuramente será reunido em formato de livro. Aqui, o convite é simples: olhar para os hinos 
          que sempre cantamos com novos olhos, reconhecendo que eles são fruto da ação de Deus na história, por meio de 
          vidas rendidas à Sua Palavra.
        </p>

        <div className="navigation-links">
          <Link to="/compositores/lutero" className="btn-proximo">
            Próximo Estudo: Martinho Lutero→
          </Link>
        </div>

      </main>

    </div>
  );
}