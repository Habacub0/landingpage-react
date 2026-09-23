import useTipoCambio from '../hooks/useTipoCambio.js';
import EstadoPeticion from './EstadoPeticion.jsx';
import TarjetaDato from './TarjetaDato.jsx';

export default function SeccionAPI() {
  const { datos, cargando, error, reintentar } = useTipoCambio();

  const mostrarDatos = !cargando && !error && datos.length > 0;

  return (
    <section className="contenedor seccion" id="tipo-cambio">
      <h2>Tipo de cambio de referencia</h2>

      <p className="seccion__intro">
        Si consultas hardware con precios en dólares, multiplica su
        precio por esta tasa para estimar el valor en quetzales.
        Esta referencia no constituye una cotización.
      </p>

      <EstadoPeticion
        cargando={cargando}
        error={error}
        vacio={datos.length === 0}
        reintentar={reintentar}
      />

      {mostrarDatos && (
        <div className="rejilla">
          {datos.map(dato => (
            <TarjetaDato key={dato.id} dato={dato} />
          ))}
        </div>
      )}

      <p>
        <a
          href="https://www.exchangerate-api.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rates By Exchange Rate API
        </a>
      </p>
    </section>
  );
}