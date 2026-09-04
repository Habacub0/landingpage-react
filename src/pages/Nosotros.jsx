import { EQUIPO } from '../datos.js';

export default function Nosotros() {
  return (
    <div className="contenedor seccion nosotros">
      <h2>Nuestra historia</h2>
      <p className="seccion__intro">
        Servicios Técnicos AR es un proyecto familiar que nació en 2026 por la necesidad de brindar 
        soporte informático a hogares y pequeñas oficinas en Sololá. Desde entonces, nos hemos dedicado a ofrecer servicios confiables y accesibles para nuestra comunidad.
      </p>

      <p>
        Ofrecemos mantenimiento preventivo de computadoras, instalación de sistemas operativos y 
        programas, recuperación de archivos y configuración de redes domésticas y para pequeñas oficinas.
      </p>

      <p>
        Contamos con personal técnico en las áreas de redes, hardware y software, comprometido
         con brindar una atención profesional y respetuosa a cada cliente.
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