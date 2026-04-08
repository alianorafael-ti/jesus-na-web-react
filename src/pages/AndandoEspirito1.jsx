import LayoutEstudo from "../components/LayoutEstudo";
import "../styles/Estudos.css";
import { Link } from "react-router-dom";

export default function AndandoEspirito1() {
  return (
    <LayoutEstudo titulo="Série: Andando no Espírito — Estudo 1">

      <h2>O que significa andar no Espírito?</h2>

      <p style={{ fontStyle: "italic" }}>
        “Por isso digo: deixem que o Espírito dirija a vida de vocês, e vocês não satisfarão os desejos da natureza humana.”<br />
        <strong>Gálatas 5:16 — NTLH</strong>
      </p>

      <section>
        <h3>🎯 Objetivo do estudo</h3>
        <p>
          Compreender, à luz das Escrituras, o verdadeiro significado de andar no Espírito, distinguindo esse conceito de experiências emocionais, legalismo religioso ou espiritualidade sem base bíblica.
        </p>
      </section>

      <section>
        <h3>1️⃣ O contexto da carta aos Gálatas</h3>

        <p>
          A carta aos Gálatas foi escrita pelo apóstolo Paulo para corrigir um erro sério: a tentativa de viver a vida cristã por meio de regras humanas e méritos próprios. Paulo reafirma que tanto a salvação quanto a vida cristã são vividas pela graça.
        </p>

        <p style={{ fontStyle: "italic" }}>
          “Porque vocês foram chamados para a liberdade. Porém não usem a liberdade para dar ocasião à natureza humana.”<br />
          <strong>Gálatas 5:13 — NTLH</strong>
        </p>
      </section>

      <section>
        <h3>2️⃣ O que a Bíblia quer dizer com “andar”</h3>

        <p>
          Na Bíblia, a palavra “andar” refere-se ao modo de viver, à prática diária. Não se trata de um evento isolado, mas de um estilo de vida contínuo.
        </p>

        <p style={{ fontStyle: "italic" }}>
          “Se vivemos no Espírito, andemos também no Espírito.”<br />
          <strong>Gálatas 5:25 — ARA</strong>
        </p>

        <p>
          Andar no Espírito é permitir que o Espírito Santo conduza nossas decisões, pensamentos e atitudes todos os dias.
        </p>
      </section>

      <section>
        <h3>3️⃣ O conflito entre a carne e o Espírito</h3>

        <p style={{ fontStyle: "italic" }}>
          “Pois o que a natureza humana quer é contra o que o Espírito quer, e o que o Espírito quer é contra o que a natureza humana quer.”<br />
          <strong>Gálatas 5:17 — NTLH</strong>
        </p>

        <p>
          Esse conflito é real na vida do cristão. A carne representa a velha natureza, enquanto o Espírito conduz à nova vida em Cristo. A vitória não vem do esforço humano, mas da dependência do Espírito.
        </p>
      </section>

      <section>
        <h3>4️⃣ Obras da carne: sinais de alerta</h3>

        <p>
          Paulo lista as obras da carne para alertar sobre um estilo de vida que não está sendo governado pelo Espírito Santo.
        </p>

        <p style={{ fontStyle: "italic" }}>
          “As obras da natureza humana são bem conhecidas: imoralidade sexual, impureza, libertinagem…”<br />
          <strong>Gálatas 5:19 — NTLH</strong>
        </p>
      </section>

      <section>
        <h3>5️⃣ O fruto do Espírito: evidência do verdadeiro andar</h3>

        <p style={{ fontStyle: "italic" }}>
          “Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.”<br />
          <strong>Gálatas 5:22–23 — NTLH</strong>
        </p>

        <p>
          O fruto do Espírito revela o caráter de Cristo sendo formado no cristão. Diferente das obras da carne, o fruto é produzido pelo Espírito ao longo do tempo.
        </p>
      </section>

      <section>
        <h3>6️⃣ Crucificando a carne</h3>

        <p style={{ fontStyle: "italic" }}>
          “E os que são de Cristo Jesus crucificaram a carne, com as suas paixões e os seus desejos.”<br />
          <strong>Gálatas 5:24 — ARA</strong>
        </p>

        <p>
          Crucificar a carne significa negar desejos pecaminosos e submeter a vontade pessoal à cruz de Cristo.
        </p>
      </section>

      <section>
        <h3>🧠 Aplicação prática</h3>
        <p>Minhas decisões revelam dependência do Espírito?</p>
        <p>O fruto do Espírito é visível em minha vida?</p>
        <p>Minha espiritualidade é guiada pela Palavra?</p>
      </section>

      <section>
        <h3>🙏 Oração</h3>
        <p>
          Espírito Santo, reconheço minha dependência de Ti. Ensina-me a andar segundo a Tua vontade, a negar a carne e a viver para a glória de Cristo. Amém.
        </p>
      </section>

      <section>
        <h3>🔗 Navegação</h3>

        <p>
          <Link to="/espirito">⬅ Voltar para a introdução</Link>
        </p>

        <p>
          Próximo estudo ➡ (em breve)
        </p>
      </section>

    </LayoutEstudo>
  );
}