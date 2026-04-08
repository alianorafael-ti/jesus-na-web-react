import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Home from "./pages/Home.jsx";
import Compositores from "./pages/Compositores.jsx";
import CompositoresIntro from "./pages/CompositoresIntro.jsx";
import Meditacao from "./pages/Meditacao.jsx";
import Estudos from "./pages/Estudos.jsx";
import QuemSomos from "./pages/QuemSomos.jsx";
import Contato from "./pages/Contato.jsx";
import Wesley from "./pages/Wesley.jsx";
import Lutero from "./pages/Lutero";
import Watts from "./pages/Watts";
import Moravia from "./pages/Moravia";
import Apologetica from "./pages/Apologetica";
import Espirito from "./pages/Espirito";
import Missoes from "./pages/Missoes";
import ReducaoDanos from "./pages/ReducaoDanos.jsx";
import LivrosCristaos from "./pages/LivrosCristaos";
import FilmesCristaos from "./pages/FilmesCristaos";
import AndandoEspirito1 from "./pages/AndandoEspirito1";


function App() {
  return (
    <Router>
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
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;