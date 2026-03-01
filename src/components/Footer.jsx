import "../styles/Footer.css";

function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Jesus na Web - Promovendo a sã doutrina © {ano}
      </p>
    </footer>
  );
}

export default Footer;