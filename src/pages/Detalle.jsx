import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS } from '../datos.js';

export default function Detalle() {
  // 1. Leemos el :id de la URL. SIEMPRE llega como texto.
  const { id } = useParams();

  // 2. Buscamos el producto.
  const producto = PRODUCTOS.find(p => p.id === Number(id));

  // 3. Si no existe, mostramos un mensaje.
  if (!producto) {
    return (
      <>
        <title>Servicio no encontrado · Servicios Técnicos AR</title>

        <div className="contenedor seccion vacio">
          <h2>Servicio no encontrado</h2>

          <p>
            El servicio con el código {id} no está en nuestro catálogo.
          </p>

          <Link className="boton" to="/productos">
            Ver el catálogo
          </Link>
        </div>
      </>
    );
  }

  // 4. Si existe, mostramos el servicio y sus metadatos.
  return (
    <>
      <title>{producto.nombre} · Servicios Técnicos AR</title>

      <meta
        name="description"
        content={producto.resumen}
      />

      <link
        rel="canonical"
        href={`https://serviciostecnicosar.netlify.app/productos/${producto.id}`}
      />

      <div className="contenedor seccion">
        <Link className="volver" to="/productos">
          ← Volver al catálogo
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
                <h3>Características</h3>

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
              Pedir este servicio
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}