import Aurora from "./Aurora";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header-container">
      {/* Aurora en el fondo */}
      <div className="aurora-container">
        <Aurora colorStops={["#00D8FF", "#7CFF67", "#00D8FF"]} blend={0.5} amplitude={1.0} speed={0.5} />
      </div>

      {/* Contenido centrado dentro de la aurora */}
      <div className="content-wrapper">
        <div className="intro-text">
          <h1>Hola, yo soy Alejo Marcó</h1>
          <p>Desarrollador apasionado por la tecnología y la creatividad.</p>
        </div>

        <div className="profile-container">
          <img src="/perfil.jpg" alt="Alejo Marcó" className="profile-img" />
        </div>
      </div>
    </header>
  );
};

export default Header;
