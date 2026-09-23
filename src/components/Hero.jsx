import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="hero">
      <span className="hero__etiqueta">Profesionalismo</span>
      <h1>Soporte técnico especializado</h1>
      <p>
        Brindamos soporte técnico para computadoras, instalación de
        programas y configuración de redes, con profesionalismo y respeto.
      </p>
      <Link className="boton" to="/contacto">
        Solicitar tu cotización
      </Link>
    </header>
  );
}