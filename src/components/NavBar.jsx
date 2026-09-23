import { NavLink, useLocation } from 'react-router-dom';
import { ENLACES } from '../datos.js';

const SECCIONES = [
  { id: 'beneficios', texto: 'Beneficios' },
  { id: 'servicios', texto: 'Servicios' },
  { id: 'tipo-cambio', texto: 'Tipo de cambio' },
  { id: 'equipo', texto: 'Equipo' },
  { id: 'cotizacion', texto: 'Cotizar' },
];

export default function NavBar() {
  const { pathname, hash } = useLocation();

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar__marca">
        <span aria-hidden="true">💻</span> Servicios Técnicos AR
      </NavLink>

      <ul className="navbar__links">
        {pathname === '/' && SECCIONES.map(seccion => (
          <li key={seccion.id}>
            <NavLink
              to={`/#${seccion.id}`}
              className={
                hash === `#${seccion.id}` ? 'activo' : ''
              }
              onClick={() => {
                document.getElementById(seccion.id)?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }}
            >
              {seccion.texto}
            </NavLink>
          </li>
        ))}

        {ENLACES.map(enlace => (
          <li key={enlace.id}>
            <NavLink
              to={enlace.ruta}
              end={enlace.ruta === '/'}
              className={({ isActive }) =>
                isActive && !(enlace.ruta === '/' && hash)
                  ? 'activo'
                  : ''
              }
            >
              {enlace.texto}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}