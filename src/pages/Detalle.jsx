import { useParams, Link } from 'react-router-dom';
import { PRODUCTOS } from '../datos.js';

export default function Detalle() {
  // 1. Leemos el :id de la URL. SIEMPRE llega como texto.
  const { id } = useParams();

  // 2. Buscamos el producto. Number(id) convierte "3" (texto) a 3 (número)
  const producto = PRODUCTOS.find(p => p.id === Number(id));

  // 3. Si no existe, mostramos un mensaje en vez de reventar
  if (!producto) {
    return (
      <div className="contenedor seccion vacio">
        <h2>Servicio no encontrado</h2>
        <p>El servicio con el código {id} no está en nuestro catálogo.</p>
        <Link className="boton" to="/productos">Ver el catálogo</Link>
      </div>
    );
  }

  // 4. Si sí existe, lo mostramos
  return (
    <div className="contenedor seccion">
      <Link className="volver" to="/productos">← Volver al catálogo</Link>

      <div className="detalle">
        <div className="detalle__imagen" aria-hidden="true">
          {producto.emoji}
        </div>

        <div>
          <span className="tarjeta__categoria">{producto.categoria}</span>
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

          <p className="detalle__precio">Precio: {producto.precio}</p>

          <Link className="boton" to="/contacto">Pedir este servicio</Link>
        </div>
      </div>
    </div>
  );
}