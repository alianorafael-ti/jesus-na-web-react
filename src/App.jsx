import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home.jsx";
import Compositores from "./pages/Compositores.jsx";
import CompositoresIntro from "./pages/CompositoresIntro.jsx";
import Meditacao from "./pages/Meditacao.jsx";
import Estudos from "./pages/Estudos.jsx";
import QuemSomos from "./pages/QuemSomos.jsx";
import Contato from "./pages/Contato.jsx";
import Wesley from "./pages/Wesley.jsx";
import Lutero from "./pages/Lutero.jsx";
import Watts from "./pages/Watts.jsx";
import Moravia from "./pages/Moravia.jsx";
import Apologetica from "./pages/Apologetica.jsx";
import Espirito from "./pages/Espirito.jsx";
import Missoes from "./pages/Missoes.jsx";
import ReducaoDanos from "./pages/ReducaoDanos.jsx";
import LivrosCristaos from "./pages/LivrosCristaos.jsx";
import FilmesCristaos from "./pages/FilmesCristaos.jsx";
import AndandoEspirito1 from "./pages/AndandoEspirito1.jsx";
import Obrigado from "./pages/Obrigado.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/compositores" element={<Compositores />} />
        <Route path="/compositores/intro" element={<CompositoresIntro />} />
        <Route path="/meditacao" element={<Meditacao />} />
        <Route path="/estudos" element={<Estudos />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/compositores/wesley" element={<Wesley />} />
        <Route path="/compositores/lutero" element={<Lutero />} />
        <Route path="/compositores/watts" element={<Watts />} />
        <Route path="/historia/moravia" element={<Moravia />} />
        <Route path="/apologetica" element={<Apologetica />} />
        <Route path="/espirito" element={<Espirito />} />
        <Route path="/espirito/andando-espirito-1" element={<AndandoEspirito1 />} />
        <Route path="/missoes" element={<Missoes />} />
        <Route path="/reducao-danos" element={<ReducaoDanos />} />
        <Route path="/livros-cristaos" element={<LivrosCristaos />} />
        <Route path="/filmes-cristaos" element={<FilmesCristaos />} />
        <Route path="/obrigado" element={<Obrigado />} />
      </Routes>
    </Layout>
  );
}

export default App;