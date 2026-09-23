const URL_API = import.meta.env.VITE_API_CAMBIO_URL;

export async function obtenerTipoCambio({ signal } = {}) {
  const respuesta = await fetch(URL_API, { signal });

  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }

  const datos = await respuesta.json();

  if (datos.result !== 'success') {
    throw new Error('No fue posible consultar el tipo de cambio.');
  }

  const tasa = datos.rates?.GTQ;

  // Sin dato disponible: permitirá mostrar el estado vacío.
  if (tasa == null) {
    return [];
  }

  if (typeof tasa !== 'number' || !Number.isFinite(tasa) || tasa <= 0) {
    throw new Error('La API devolvió un tipo de cambio inválido.');
  }

  return [{
    id: 'USD-GTQ',
    origen: datos.base_code,
    destino: 'GTQ',
    tasa,
    actualizacion: datos.time_last_update_utc,
  }];
}