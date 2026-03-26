import Card from "../components/Card.jsx";
import "../styles/Home.css";

import compositores from "../assets/compositores.avif";
import historia from "../assets/historia-da-igreja.webp";
import meditacao from "../assets/meditacao.webp";
import estudos from "../assets/estudos-biblicos.webp";
import apologetica from "../assets/apologetica.avif";
import espirito from "../assets/espirito-santo.webp";
import missoes from "../assets/missoes.webp";
import aliano from "../assets/aliano.png"; // Quem somos

import jesusrd from "../assets/jesus-rd.png";
import livro from "../assets/livro1.png";
import filme from "../assets/filme1.png";

export default function Home() {
  return (
    <div className="home">

      <section className="hero">
        <h1>Jesus na Web</h1>
        <p>
          Levando a Palavra de Deus através da internet.
          Estudos bíblicos e crescimento espiritual.
        </p>
      </section>

      <section className="secao">
        <h2>Mensagens e Estudos</h2>

        <div className="cards">
          <Card 
            titulo="Série Compositores da Harpa Cristã" 
            texto="Novas biografias quinzenais em ordem cronológica. Conheça as histórias por traz do louvores!" 
            link="/compositores/intro" 
            imagem={compositores} 
          />
          <Card 
            titulo="História da Igreja" 
            texto="A história do cristianismo" 
            link="/historia/moravia" 
            imagem={historia} 
          />
          <Card 
            titulo="Meditações" 
            texto="Reflexões diárias" 
            link="/meditacao" 
            imagem={meditacao} 
          />
          <Card 
            titulo="Estudos Bíblicos" 
            texto="Crescimento espiritual" 
            link="/estudos" 
            imagem={estudos} 
          />
          <Card 
            titulo="Apologética" 
            texto="Defesa da fé cristã" 
            link="/apologetica"  
            imagem={apologetica} 
          />
          <Card 
            titulo="Espírito Santo" 
            texto="Estudos sobre o Espírito Santo" 
            link="/espirito"
            imagem={espirito} 
          />
          <Card 
            titulo="Missões" 
            texto="Ide por todo o mundo" 
            link="/estudos" 
            imagem={missoes} 
          />
          <Card 
            titulo="Quem Somos" 
            texto="Conheça o projeto Jesus na Web" 
            link="/quem-somos" 
            imagem={aliano} 
          />
        </div>
      </section>

      <section className="secao">
        <h2>Vida Cristã</h2>

        <div className="cards">
          <Card titulo="Jesus" texto="Conheça mais sobre Jesus" link="/estudos" imagem={jesusrd}/>
          <Card titulo="Livros Cristãos" texto="Indicações de leitura" link="/estudos" imagem={livro}/>
          <Card titulo="Filmes Cristãos" texto="Filmes edificantes" link="/estudos" imagem={filme}/>
        </div>
      </section>

      <section className="contato">
        <h2>Contato</h2>

        <p className="contato-texto">
          Queremos caminhar com você! Use este espaço para enviar seu 
          <b> testemunho</b>, deixar seus <b>pedidos de oração</b>, 
          compartilhar dúvidas ou sugestões.
        </p>

        <div className="contato-box">
          <form className="contato-form">

            <input type="text" placeholder="Seu nome" />
            <input type="email" placeholder="Seu email" />
            <textarea placeholder="Mensagem" rows="5"></textarea>

            <div className="botoes">
              <button type="submit">Enviar</button>
              <button type="reset" className="limpar">Limpar</button>
            </div>

          </form>
        </div>
      </section>

      <section className="versiculo">
        <p>
          "Antes crescei na graça e conhecimento de nosso Senhor
          e Salvador Jesus Cristo."
        </p>
        <span>2 Pedro 3:18</span>
      </section>

    </div>
  );
}