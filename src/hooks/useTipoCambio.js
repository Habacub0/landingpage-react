import { useEffect, useState } from 'react';
import { obtenerTipoCambio } from '../api/tipoCambio.js';

export default function useTipoCambio() {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [intento, setIntento] = useState(0);

  useEffect(() => {
    const controlador = new AbortController();

    async function cargar() {
      setCargando(true);
      setError(null);
      setDatos([]);

      try {
        const resultado = await obtenerTipoCambio({
          signal: controlador.signal,
        });

        if (!controlador.signal.aborted) {
          setDatos(resultado);
        }
      } catch (errorPeticion) {
        if (!controlador.signal.aborted) {
          setError(
            'No pudimos consultar el tipo de cambio. Intenta nuevamente.'
          );
        }
      } finally {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      }
    }

    cargar();

    return () => controlador.abort();
  }, [intento]);

  function reintentar() {
    setIntento(actual => actual + 1);
  }

  return { datos, cargando, error, reintentar };
}