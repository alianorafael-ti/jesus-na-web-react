import { Link } from "react-router-dom";

function Compositores() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Compositores da Harpa Cristã</h1>

      <div style={{ marginTop: "30px" }}>
        
        <p>
          <Link to="/compositores/intro">
            Introdução
          </Link>
        </p>

        <p>
          <Link to="/compositores/wesley">
            Charles Wesley
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Compositores;