import { Link } from 'react-router-dom';
import { PRODUCTOS, BENEFICIOS } from '../datos.js';
import TarjetaProducto from '../components/TarjetaProducto.jsx';

export default function Inicio() {
  // Estado derivado: filtramos los destacados en el momento
  const destacados = PRODUCTOS.filter(p => p.destacado);

  return (
    <>
      {/* ---------- Portada ---------- */}
      <header className="hero">
        <span className="hero__etiqueta">Profesionalismo</span>
        <h1>Soporte técnico especializado</h1>
        <p>
          Brindamos soporte técnico para computadoras, instalación de programas y configuración de redes, con profesionalismo y respeto.
        </p>
        <Link className="boton" to="/productos">Ver servicios</Link>
      </header>

      {/* ---------- Beneficios ---------- */}
      <section className="contenedor seccion">
        <h2>Beneficios</h2>
        <p className="seccion__intro">
          Nos destacamos por la calidad de nuestro trabajo y la atención a los detalles. Cada servicio se realiza con profesionalismo, respeto y experiencia.
        </p>

        <div className="rejilla">
          {BENEFICIOS.map(b => (
            <article key={b.id} className="beneficio">
              <span className="beneficio__icono" aria-hidden="true">{b.icono}</span>
              <h3>{b.titulo}</h3>
              <p>{b.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- Destacados ---------- */}
      <section className="contenedor seccion">
        <h2>Nuestros favoritos</h2>
        <p className="seccion__intro">Los dos que más nos piden.</p>

        <div className="rejilla">
          {destacados.map(producto => (
            <TarjetaProducto key={producto.id} producto={producto} />
          ))}
        </div>

        <p style={{ marginTop: '2rem' }}>
          <Link className="boton boton--borde" to="/productos">
            Ver todo el catálogo
          </Link>
        </p>
      </section>
    </>
  );
}