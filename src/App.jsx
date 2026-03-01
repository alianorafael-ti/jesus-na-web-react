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
          <Route path="/quemsomos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/compositores/wesley" element={<Wesley />} />
          <Route path="/compositores/lutero" element={<Lutero />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;