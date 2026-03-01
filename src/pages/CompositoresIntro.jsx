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

        {/* NOVO TÍTULO DA SÉRIE */}
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
          Suas melodias são familiares, suas letras estão gravadas na memória da Igreja, mas,
          paradoxalmente, suas origens são pouco conhecidas.
        </p>

        <p>
          Esta série nasce com o propósito de despertar o interesse pela história dos hinos cristãos,
          especialmente daqueles que compõem a <span className="destaque-texto">Harpa Cristã</span>.
          Não se trata apenas de música, mas de fé cantada.
        </p>

        <h2>O Legado da Reforma</h2>

        <p>
          Antes da Reforma Protestante, a música no culto cristão era restrita ao clero e aos coros.
          O povo assistia, mas não participava.
        </p>

        <p>
          Ao longo desta série, o leitor será conduzido por uma linha cronológica,
          dos compositores mais antigos aos mais contemporâneos.
        </p>

        <p>
          Este conteúdo é uma preparação para um estudo mais amplo que futuramente
          será reunido em formato de livro.
        </p>

        {/* BOTÃO PRÓXIMO */}
        <div className="navigation-links">

          <Link to="/compositores/wesley" className="btn-proximo">
            Próximo Estudo: Charles Wesley →
          </Link>

        </div>

      </main>

    </div>
  );
}