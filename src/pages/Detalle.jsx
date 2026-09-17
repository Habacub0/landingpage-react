import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS } from '../datos.js';

export default function Detalle() {
  // Leemos el slug incluido en la URL.
  const { slug } = useParams();

  // Buscamos el servicio mediante su slug.
  const producto = PRODUCTOS.find(
    producto => producto.slug === slug
  );

  // Si el servicio no existe, mostramos un mensaje.
  if (!producto) {
    return (
      <>
        <title>Servicio no encontrado · Servicios Técnicos AR</title>

        <div className="contenedor seccion vacio">
          <h1>Servicio no encontrado</h1>

          <p>
            El servicio solicitado no está en nuestro catálogo.
          </p>

          <Link className="boton" to="/productos">
            Ver el catálogo de servicios
          </Link>
        </div>
      </>
    );
  }
  const precioNumerico = producto.precio.match(/[\d.]+/)?.[0];

const datosEstructurados = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: producto.nombre,
  description: producto.descripcion,
  category: producto.categoria,
  ...(precioNumerico && {
    offers: {
      '@type': 'Offer',
      price: precioNumerico,
      priceCurrency: 'GTQ',
      availability: 'https://schema.org/InStock',
    },
  }),
};
  // Si existe, mostramos el servicio y sus metadatos.
  return (
    <>
      <title>{producto.nombre} · Servicios Técnicos AR</title>

      <meta
        name="description"
        content={producto.resumen}
      />

      <link
        rel="canonical"
        href={`https://serviciostecnicosar.netlify.app/productos/${producto.slug}`}
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(datosEstructurados),
  }}
/>
      <div className="contenedor seccion">
        <Link className="volver" to="/productos">
          ← Volver al catálogo de servicios
        </Link>

        <div className="detalle">
          <div
            className="detalle__imagen"
            aria-hidden="true"
          >
            {producto.emoji}
          </div>

          <div>
            <span className="tarjeta__categoria">
              {producto.categoria}
            </span>

            <h1>{producto.nombre}</h1>

            <p>{producto.descripcion}</p>

            {producto.notas.length > 0 && (
              <>
                <h2>Características</h2>

                <ul className="notas">
                  {producto.notas.map(nota => (
                    <li key={nota}>{nota}</li>
                  ))}
                </ul>
              </>
            )}

            <p className="detalle__precio">
              Precio: {producto.precio}
            </p>

            <Link className="boton" to="/contacto">
              Solicitar este servicio técnico
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}