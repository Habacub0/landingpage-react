export default function SiteFooter() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__marca">💻 Servicios Técnicos AR</p>
      <p>Sitio de servicios técnicos · Ciudad de Mechito</p>
      <p>hola@tec-ar.com · +502 no me llames</p>
      <p>© {anio} Servicios Técnicos AR. Proyecto académico.</p>
    </footer>
  );
}