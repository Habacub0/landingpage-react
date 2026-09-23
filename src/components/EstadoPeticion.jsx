export default function EstadoPeticion({
  cargando,
  error,
  vacio,
  reintentar,
}) {
  if (cargando) {
    return (
      <div className="estado-peticion" role="status">
        <span className="spinner" aria-hidden="true" />
        <p>Consultando el tipo de cambio…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="estado-peticion" role="alert">
        <p>{error}</p>
        <button className="boton" onClick={reintentar}>
          Reintentar
        </button>
      </div>
    );
  }

  if (vacio) {
    return (
      <div className="estado-peticion" role="status">
        <p>No hay un tipo de cambio disponible.</p>
        <button className="boton" onClick={reintentar}>
          Consultar nuevamente
        </button>
      </div>
    );
  }

  return null;
}