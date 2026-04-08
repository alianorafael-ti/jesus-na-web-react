import LayoutEstudo from "../components/LayoutEstudo";
import "../styles/Estudos.css";
import { Link } from "react-router-dom";

export default function Espirito() {
  return (
    <LayoutEstudo titulo="🕊️ Andando no Espírito">

      <p style={{ textAlign: "center", fontStyle: "italic" }}>
        “Por isso digo: deixem que o Espírito dirija a vida de vocês, e vocês não satisfarão os desejos da natureza humana.”<br/>
        <strong>Gálatas 5:16 — NTLH</strong>
      </p>

      <section>
        <h3>Introdução</h3>
        <p>
          A vida cristã não é apenas uma decisão tomada no passado, mas um caminho diário de obediência, crescimento e dependência de Deus. A Bíblia nos ensina que esse caminho deve ser trilhado sob a direção do Espírito Santo.
        </p>

        <p>
          A seção Andando no Espírito foi criada para ajudar cristãos — novos ou maduros — a compreender, de forma clara e bíblica, o que significa viver uma vida guiada pelo Espírito, fundamentada na Palavra e centrada em Cristo.
        </p>
      </section>

      <section>
        <h3>O que significa “andar no Espírito”?</h3>

        <p style={{ fontStyle: "italic" }}>
          “Se vivemos no Espírito, andemos também no Espírito.”<br/>
          <strong>Gálatas 5:25 — ARA</strong>
        </p>

        <p>
          Na linguagem bíblica, “andar” significa modo de viver, conduta diária. Andar no Espírito não se refere a sentimentos momentâneos ou experiências isoladas, mas a uma vida constantemente guiada pela vontade de Deus.
        </p>

        <p>
          Andar no Espírito é permitir que o Espírito Santo influencie nossas decisões, pensamentos, atitudes e relacionamentos, conduzindo-nos à santidade e à maturidade cristã.
        </p>
      </section>

      <section>
        <h3>Quem é o Espírito Santo?</h3>

        <p style={{ fontStyle: "italic" }}>
          “E eu pedirei ao Pai, e ele lhes dará outro Consolador, para estar com vocês para sempre.”<br/>
          <strong>João 14:16 — NTLH</strong>
        </p>

        <p>
          O Espírito Santo não é uma força impessoal ou simbólica. Ele é Deus, a terceira Pessoa da Trindade, enviado para habitar no cristão, ensinar a verdade e conduzir a vida segundo a vontade do Pai.
        </p>
      </section>

      <section>
        <h3>O conflito entre a carne e o Espírito</h3>

        <p style={{ fontStyle: "italic" }}>
          “Pois a natureza humana deseja o que é contrário ao Espírito, e o Espírito deseja o que é contrário à natureza humana.”<br/>
          <strong>Gálatas 5:17 — NTLH</strong>
        </p>

        <p>
          Todo cristão experimenta uma batalha interior. A carne representa a velha natureza, enquanto o Espírito nos conduz à nova vida em Cristo. A vitória não vem do esforço humano, mas da submissão diária ao Espírito Santo.
        </p>
      </section>

      <section>
        <h3>O fruto do Espírito: evidência do verdadeiro caminhar</h3>

        <p style={{ fontStyle: "italic" }}>
          “Mas o fruto do Espírito é amor, alegria, paz, paciência, amabilidade, bondade, fidelidade, mansidão e domínio próprio.”<br/>
          <strong>Gálatas 5:22–23 — NTLH</strong>
        </p>

        <p>
          A Bíblia ensina que o caráter transformado é a maior evidência de uma vida cheia do Espírito. O fruto do Espírito revela a obra contínua de Deus no interior do cristão.
        </p>
      </section>

      <section>
        <h3>Estudos disponíveis</h3>

        <div className="cards">

          <div className="card">
            <h4>Estudo 1</h4>
            <p>O que significa andar no Espírito?</p>
            <p><strong>Gálatas 5:16–25</strong></p>

            <Link to="/espirito/andando-espirito-1" className="botao-estudo">
              Ler estudo
            </Link>
          </div>

          <div className="card">
            <h4>Estudo 2</h4>
            <p>Quem é o Espírito Santo?</p>
            <p><strong>Em breve</strong></p>
          </div>

        </div>
      </section>

      <p style={{ textAlign: "center", marginTop: "40px", fontStyle: "italic" }}>
        “Andar no Espírito é viver cada dia sob a direção de Deus, pela Palavra, para a glória de Cristo.”
      </p>

    </LayoutEstudo>
  );
}