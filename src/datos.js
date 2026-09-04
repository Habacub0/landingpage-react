export const PRODUCTOS = [
  {
    id: 1,
    nombre: 'Instalación limpia de Windows 11',
    categoria: 'Software',
    precio: 'Q1700.00',
    emoji: '💻',
    resumen:
      'Instalación limpia de Windows 11 con licencia OEM original.',
    descripcion:
      'Este proceso se realiza con licencias originales, sin activaciones piratas.',
    notas: ['Windows 11', 'Licencia OEM', 'Instalación limpia'],
    destacado: true,
  },
  {
    id: 2,
    nombre: 'Instalación de programas',
    categoria: 'Software',
    precio: 'Solicitar cotización',
    emoji: '📦',
    resumen:
      'Instalación y configuración de programas para uso personal o empresarial.',
    descripcion:
      'Se instalan y configuran los programas que el cliente necesita, utilizando licencias originales o software gratuito.',
    notas: ['Instalación', 'Configuración', 'Software'],
    destacado: true,
  },
  {
    id: 3,
    nombre: 'Recuperación de archivos borrados',
    categoria: 'Software',
    precio: 'Solicitar cotización',
    emoji: '🗂️',
    resumen:
      'Diagnóstico para recuperar archivos eliminados accidentalmente.',
    descripcion:
      'Se analiza el dispositivo de almacenamiento para determinar si es posible recuperar los archivos borrados.',
    notas: ['Diagnóstico', 'Recuperación', 'Archivos'],
    destacado: false,
  },
  {
    id: 4,
    nombre: 'Mantenimiento preventivo de computadoras',
    categoria: 'Hardware',
    precio: 'Solicitar cotización',
    emoji: '🧰',
    resumen:
      'Limpieza y revisión preventiva de computadoras de escritorio y portátiles.',
    descripcion:
      'Incluye limpieza interna, revisión de componentes y comprobación general del funcionamiento del equipo.',
    notas: ['Limpieza', 'Componentes', 'Prevención'],
    destacado: true,
  },
  {
    id: 5,
    nombre: 'Instalación de redes domésticas',
    categoria: 'Redes',
    precio: 'Solicitar cotización',
    emoji: '🏠',
    resumen:
      'Instalación y configuración de redes para hogares.',
    descripcion:
      'Se configuran los dispositivos de red para distribuir la conexión a internet dentro del hogar.',
    notas: ['Wi-Fi', 'Conectividad', 'Hogar'],
    destacado: false,
  },
  {
    id: 6,
    nombre: 'Instalación de redes para oficinas pequeñas',
    categoria: 'Redes',
    precio: 'Solicitar cotización',
    emoji: '🌐',
    resumen:
      'Instalación de redes para conectar los equipos de oficinas pequeñas.',
    descripcion:
      'Se diseña y configura la red según la cantidad de equipos y las necesidades de conexión de la oficina.',
    notas: ['Oficinas', 'Configuración', 'Conectividad'],
    destacado: false,
  },
];

export const CATEGORIAS = [  'Todos',  'Software',  'Hardware',  'Redes',];



export const BENEFICIOS = [
  {
    id: 1,
    icono: '🎓',
    titulo: 'Profesionalismo',
    texto:
      'Realizamos cada servicio con responsabilidad, orden y atención a los detalles.',
  },
  {
    id: 2,
    icono: '🤝',
    titulo: 'Respeto',
    texto:
      'Tratamos con respeto a cada cliente, sus equipos y su información.',
  },
  {
    id: 3,
    icono: '🛠️',
    titulo: 'Experiencia',
    texto:
      'Contamos con experiencia en soporte de computadoras, instalación de programas y configuración de redes.',
  },
];

export const EQUIPO = [
  { id: 1, inicial: 'M', nombre: 'María Xoc', rol: 'Técnica en redes' },
  { id: 2, inicial: 'D', nombre: 'Diego Ramos', rol: 'Técnico en hardware' },
  { id: 3, inicial: 'L', nombre: 'Lucía Pérez', rol: 'Técnica en software' },
];

export const ENLACES = [
  { id: 'inicio',    texto: 'Inicio',    ruta: '/' },
  { id: 'productos', texto: 'Productos', ruta: '/productos' },
  { id: 'nosotros',  texto: 'Nosotros',  ruta: '/nosotros' },
  { id: 'contacto',  texto: 'Contacto',  ruta: '/contacto' },
];