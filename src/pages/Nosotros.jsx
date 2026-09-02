import { EQUIPO } from '../datos.js';

export default function Nosotros() {
  return (
    <div className="contenedor seccion nosotros">
      <h2>Nuestra historia</h2>
      <p className="seccion__intro">
        Servicios Técnicos de Reparación es un proyecto familiar que nació en 2026 por la necesidad de reparar electrodomésticos y aparatos electrónicos en Sololá. 
        Desde entonces, nos hemos dedicado a ofrecer un servicio de calidad, confiable y accesible para nuestra comunidad.
      </p>

      <p>
        Estamos comprometidos con la sostenibilidad y la economía circular, promoviendo la reparación en lugar de la sustitución. 
        Creemos que cada aparato tiene una historia y merece una segunda oportunidad.
      </p>

      <p>
        Estamos orgullosos de nuestro equipo de técnicos altamente capacitados, quienes comparten nuestra pasión 
        por la reparación y la satisfacción del cliente.
      </p>

      <h2 style={{ marginTop: '3rem' }}>El equipo</h2>

      <div className="rejilla">
        {EQUIPO.map(persona => (
          <article key={persona.id} className="miembro">
            <div className="miembro__avatar" aria-hidden="true">
              {persona.inicial}
            </div>
            <h3>{persona.nombre}</h3>
            <p>{persona.rol}</p>
          </article>
        ))}
      </div>
    </div>
  );
}