export default function TarjetaDato({ dato }) {
  const tasa = new Intl.NumberFormat('es-GT', {
    style: 'currency',
    currency: 'GTQ',
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(dato.tasa);

  const fecha = new Date(dato.actualizacion);

  const actualizacion = Number.isNaN(fecha.getTime())
    ? 'Fecha no disponible'
    : new Intl.DateTimeFormat('es-GT', {
        dateStyle: 'medium',
        timeStyle: 'short',
        timeZone: 'America/Guatemala',
      }).format(fecha);

  return (
    <article className="tarjeta">
      <h3>Dólar a quetzal</h3>
      <p className="tarjeta__precio">
        1 {dato.origen} = {tasa}
      </p>
      <p>Última actualización: {actualizacion}</p>
      <p>Hora de Guatemala.</p>
    </article>
  );
}