import logo from "../assets/logo.png";
import "../styles/Header.css";

function Header() {

  const versiculos = [
    {
      texto: "O Senhor é o meu pastor; nada me faltará.",
      ref: "Salmos 23:1"
    },
    {
      texto: "Posso todas as coisas naquele que me fortalece.",
      ref: "Filipenses 4:13"
    },
    {
      texto: "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia.",
      ref: "Salmos 46:1"
    },
    {
      texto: "Buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.",
      ref: "Mateus 6:33"
    },
    {
      texto: "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará.",
      ref: "Salmos 37:5"
    },
    {
      texto: "O Senhor é a minha luz e a minha salvação; a quem temerei?",
      ref: "Salmos 27:1"
    },
    {
      texto: "Não to mandei eu? Sê forte e corajoso; não temas, nem te espantes, porque o Senhor teu Deus é contigo por onde quer que andares.",
      ref: "Josué 1:9"
    },
    {
      texto: "A fé vem pelo ouvir, e o ouvir pela palavra de Deus.",
      ref: "Romanos 10:17"
    },
    {
      texto: "O amor é sofredor, é benigno; o amor não é invejoso.",
      ref: "1 Coríntios 13:4"
    },
    {
      texto: "Se Deus é por nós, quem será contra nós?",
      ref: "Romanos 8:31"
    },
    {
      texto: "A alegria do Senhor é a vossa força.",
      ref: "Neemias 8:10"
    },
    {
      texto: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes.",
      ref: "Jeremias 33:3"
    },
    {
      texto: "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei.",
      ref: "Mateus 11:28"
    },
    {
      texto: "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito.",
      ref: "João 3:16"
    },
    {
      texto: "Antes crescei na graça e conhecimento de nosso Senhor e Salvador Jesus Cristo.",
      ref: "2 Pedro 3:18"
    }
  ];

  // Calcula o dia do ano
  const hoje = new Date();
  const inicioAno = new Date(hoje.getFullYear(), 0, 0);
  const diferenca = hoje - inicioAno;
  const diaAno = Math.floor(diferenca / (1000 * 60 * 60 * 24));

  // Escolhe versículo (0 a 14)
  const indice = diaAno % 15;
  const versiculo = versiculos[indice];

  return (
    <header className="header">
      <div className="header-container">
        
        <div className="logo">
          <img src={logo} alt="Jesus na Web" />
          <h1>Jesus na Web</h1>
        </div>

        <div className="versiculo">
          <p>"{versiculo.texto}"</p>
          <span>{versiculo.ref}</span>
        </div>

      </div>
    </header>
  );
}

export default Header;