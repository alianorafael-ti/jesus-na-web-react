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

        <h2>🕰️ Linha do tempo espiritual</h2>
        <p>
          Charles Wesley nasceu cerca de 30 anos após Isaac Watts, em um período de grande frieza espiritual.
          Enquanto Watts ensinou a igreja a cantar com entendimento, Wesley levou o louvor a um novo nível:
          <strong> cantar com experiência de salvação.</strong>
        </p>

        <h2>🌍 O mundo em que viveu</h2>
        <p>
          O século XVIII era marcado por religiosidade sem transformação, cultos formais e pouca experiência com Deus.
          Foi nesse cenário que surgiu o Avivamento Metodista, trazendo de volta o novo nascimento,
          a santidade e a presença viva de Deus.
        </p>

        <h2>🔥 Influências espirituais</h2>
        <p>
          Charles foi profundamente influenciado por seu irmão John Wesley, mas sua verdadeira mudança veio
          através de uma experiência pessoal com Cristo.
          A partir disso, seus hinos passaram a refletir uma fé viva e transformadora.
        </p>

        <h2>⚔️ Vida pessoal</h2>
        <p>
          Ele enfrentou perseguições, rejeição religiosa e oposição por pregar ao ar livre.
          Mesmo assim, transformou suas lutas em adoração — muitos de seus hinos nasceram em meio à dor.
        </p>

        <h2>🎶 O ministério através dos hinos</h2>
        <p>
          Charles Wesley escreveu mais de 6.000 hinos, abordando temas como salvação, graça,
          novo nascimento e santificação.
          Seus hinos eram verdadeiras pregações em forma de canção.
        </p>

        <h3>🎵 Hinos conhecidos</h3>

        <p>
          <em>Hark! The Herald Angels Sing</em><br />
          <em>Christ the Lord Is Risen Today</em><br />
          <em>O For a Thousand Tongues to Sing</em>
        </p>

        <h2>🔥 Revelação Importante</h2>
        <p>
          Algo que muitos cristãos não sabem é que a Harpa Cristã não é uma tradução direta de um único hinário.
          Ela foi construída a partir de várias fontes, com adaptações e influências de grandes avivamentos.
        </p>

        <p>
          Muitos hinos de Charles Wesley não aparecem com tradução literal na Harpa,
          mas sua influência está profundamente presente.
        </p>

        <h3>📌 Exemplos</h3>

        <p>
          <strong>Hark! The Herald Angels Sing</strong><br />
          Influenciou hinos natalinos, embora não apareça diretamente na Harpa.
        </p>

        <p>
          <strong>Christ the Lord Is Risen Today</strong><br />
          Sua mensagem aparece em hinos sobre a ressurreição, mesmo que adaptados.
        </p>

        <p>
          <strong>O For a Thousand Tongues to Sing</strong><br />
          Sua essência está presente em hinos de louvor pela salvação.
        </p>

        <h2>💡 Verdade espiritual</h2>
        <p>
          Mesmo quando o nome não aparece, a teologia de Charles Wesley está viva na Harpa Cristã:
          louvor centrado em Cristo, salvação pessoal e experiência com Deus.
        </p>

        <p>
          <strong>Você pode estar cantando Wesley… sem saber.</strong>
        </p>

        <div className="versiculo">
          “Cantarei ao Senhor por toda a minha vida.”<br />
          <small>Salmos 104:33</small>
        </div>

        <h2>🔎 Aplicação</h2>

        <p>
          <strong>1. O louvor pode salvar vidas</strong><br />
          Seus hinos alcançaram multidões.
        </p>

        <p>
          <strong>2. A experiência com Deus gera profundidade</strong><br />
          Não basta conhecer — é preciso viver.
        </p>

        <p>
          <strong>3. Nem tudo precisa aparecer para ter impacto</strong><br />
          Deus usa até o que não recebe reconhecimento.
        </p>

        <p>
          <strong>4. O avivamento começa no coração</strong><br />
          Antes de impactar muitos, Wesley foi transformado.
        </p>

        <h2>🙏 Reflexão final</h2>
        <p>
          Charles Wesley não foi apenas um compositor, mas um instrumento de avivamento.
          Seus hinos continuam vivos porque nasceram de um coração rendido a Cristo.
        </p>

        <p>
          <strong>
            Seu louvor tem sido apenas música… ou ferramenta de transformação?
          </strong>
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

  <button className="btn-primario" disabled>
  ⏳ Próximo estudo: Fanny Crosby (em breve)
</button>

</div>

      </main>

    </div>
  );
}