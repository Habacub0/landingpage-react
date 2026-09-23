import { Link } from 'react-router-dom';
import { PRODUCTOS, BENEFICIOS, EQUIPO } from '../datos.js';
import TarjetaProducto from '../components/TarjetaProducto.jsx';
import Hero from '../components/Hero.jsx';
import SeccionAPI from '../components/SeccionApi.jsx';

export default function Inicio() {
  // Estado derivado: filtramos los destacados en el momento
  const destacados = PRODUCTOS.filter(p => p.destacado);

  return (
    <>
    <title>Soporte técnico para hogares y oficinas · AR Sololá</title>
  <meta
  name="description"
  content="Servicios de mantenimiento, software y redes para computadoras de hogares y pequeñas oficinas en Sololá, con atención profesional y respetuosa."
  />
  <link
  rel="canonical"
  href="https://serviciostecnicosar.netlify.app/"/>
      {/* ---------- Portada ---------- */}
      <Hero />

      {/* ---------- Beneficios ---------- */}
      <section className="contenedor seccion"id = "beneficios">
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
      <section className="contenedor seccion" id = "servicios">
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
      {/* ---------- Llamada a la acción final ---------- */}
      <SeccionAPI />
      {/* ---------- Confianza ---------- */}
      <section className="contenedor seccion" id="cotizacion">
        <h2>Nuestro equipo</h2>
        <p className="seccion__intro">
          Conoce a quienes están detrás de nuestros servicios.
        </p>

        <div className="rejilla">
          {EQUIPO.map(persona => (
            <article className="beneficio" key={persona.id}>
              <h3>{persona.nombre}</h3>
              <p>{persona.rol}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="contenedor seccion">
        <h2>Solicita una cotización de soporte técnico</h2>
        <p className="seccion__intro">
          Cuéntanos qué necesitas para tu computadora, programas o red.
        </p>
        <Link className="boton" to="/contacto">
          Solicitar tu cotización
        </Link>
      </section>
    </>
  );
}