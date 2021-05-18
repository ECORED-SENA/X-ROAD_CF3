export default {
  global: {
    componenteFormativo: 'Introducción a X-Road',
    descripcionCurso:
      'Para ofrecer servicios o habilitar trámites totalmente digitales, se hace necesario   una plataforma de interoperabilidad que conecte a todas las organizaciones estatales para que puedan intercambiar información propia o de los ciudadanos en un mismo formato y lenguaje. X-Road es una capa de intercambio de datos distribuidos que proporciona una forma estandarizada y segura de producir y consumir servicios. Adicionalmente, garantiza la confidencialidad, integridad e interoperabilidad entre las partes de intercambio de datos',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades - Breve historia de la tecnología X-Road',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Qué es X-Road',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Un Poco de Historia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '¿Cómo funciona X-Road?',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Generalidades de la tecnología X-Road',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características de X-Road',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Ecosistema X-Road',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estructura',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Modelo organizacional',
            hash: 't_3_1',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Para potenciar los Servicios Ciudadanos Digitales.',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Implementación de X-Road a Nivel Mundial a 2020',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Implementación en Colombia',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Plataforma de Interoperabilidad - PDI',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
      centro: 'Dirección general',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Daniel Fernando Portilla Arciniegas',
        cargo: 'Experto temático',
        centro: 'MINTIC',
      },
      {
        nombre: 'José Ricardo Aponte Oviedo',
        cargo: 'Experto temático',
        centro: 'MINTIC',
      },
      {
        nombre: 'Sergio Arturo Medina Castillo',
        cargo: 'Diseñador instruccional',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Vilma Lucia Perilla M.',
        cargo: 'Revisora y evaluadora metodológica',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Correción de estilo',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Rafael Augusto Mantilla Lopez',
        cargo: 'Revisor de contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: [
          'Oscar Ivan Uribe Ortiz',
          'Eulises Orduz Amezquita',
          'Luis Gabriel Urueta Alvarez',
        ],
        cargo: 'Diseño web y Producción Audiovisual',
      },
      {
        nombre: 'Ricardo Alonso González Vargas',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación de recursos',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Atzori, L, Iera, A. y Morabito, G, (2017, marzo 1) Comprensión de Internet de las cosas: definición, potencialidades y papel social de un paradigma en rápida evolución pag. 122-140.',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S1570870516303316',
    },
    {
      referencia:
        'BBC NEWS. (2014, marzo 10). El peligro de usar wi-fi en lugares públicos',
      link:
        'https://www.bbc.com/mundo/noticias/2014/03/140310_wifi_internet_hotspots_rg',
    },
    {
      referencia:
        'Decreto 620 de 2020. [Presidencia de la Republica]. Por el cual se subroga el título 17 de la parte 2 del libro 2 del Decreto 1078 de 2015, para reglamentarse parcialmente los artículos 53, 54, 60, 61 Y 64 de la Ley 1437 de 2011, los literales e, j y literal a del parágrafo 2 del artículo 45 de la Ley 1753 de 2015, el numeral 3 del artículo 147 de la Ley 1955 de 2019, y el artículo 9 del Decreto 2106 de 2019, estableciendo los lineamientos generales en el uso y operación de los servicios ciudadanos digitales". 2 de mayo de 2020.',
    },
    {
      referencia:
        'Gobierno electrónico. ¿Estado, ciudadanía y democracia en Internet, Julie Massal, Carlos Germán Sandoval, Revista Análisis político nº 68, Bogotá, enero-abril, 2010: págs. 3-25?',
    },
    {
      referencia:
        'Ley 1341 de 2009. [Congreso de la Republica]. Por la cual se definen principios y conceptos sobre la sociedad de la información y la organización de las Tecnologías de la Información y las Comunicaciones –TIC–, se crea la Agencia Nacional de Espectro y se dictan otras disposiciones. Julio 30 de 2009',
    },
    {
      referencia:
        'Manual de Gobierno digital. Implementación de la Política de Gobierno Digital Decreto 1008 de 2018 (Compilado en el Decreto 1078 de 2015, capítulo 1, título 9, parte 2, libro 2).',
    },
    {
      referencia:
        'Marco de la Transformación Digital para el Estado Colombiano. MinTIC, (Julio 2020).',
    },
  ],
  glosario: [
    {
      termino: 'Servicios ciudadanos digitales',
      significado:
        'es el conjunto de soluciones y procesos transversales que brindan al Estado capacidades y eficiencias para su transformación digital, para lograr una adecuada interacción del ciudadano con el Estado, garantizando el derecho a la utilización de medios electrónicos ante la administración pública.',
    },
    {
      termino: 'Servicios ciudadanos digitales base',
      significado:
        'son los considerados como servicios de interoperabilidad, autenticación digital y carpeta ciudadana digital.',
    },
    {
      termino: 'Servicios ciudadanos digitales especiales',
      significado:
        'son aquellos que brindan soluciones que por sus características realizan nuevas ofertas de valor y son adicionales a los servicios ciudadanos digitales base, o bien, corresponden a innovaciones que realizan los prestadores de servicio a partir de la integración a los servicios ciudadanos digitales base, esto bajo un esquema coordinado por el articulador.',
    },
    {
      termino: 'Servicio de intercambio de información',
      significado:
        'en software de diseño, son líneas que se crean y permiten, expandir, modificar, al tamaño que sea sin pixelarse porque se unen por coordenadas matemáticas del programa y no se generan por números fijorecurso tecnológico que mediante el uso de un conjunto de protocolos y estándares permite el intercambio de información. “Es una representación lógica de una actividad de negocio repetible que tiene un resultado específico (por ejemplo, verificar el crédito del cliente, proporcionar datos del clima, consolidar informes de perforación) y que tiene las siguientes características: Autocontenido, puede estar compuesto por otros servicios y es una “caja negra” para los consumidores del servicio”',
    },
    {
      termino: 'Trámite',
      significado:
        'conjunto o serie de pasos o acciones reguladas por el Estado, que deben efectuar los usuarios para adquirir un derecho o cumplir con una obligación prevista o autorizada por la ley. El trámite se inicia cuando ese particular activa el aparato público a través de una petición o solicitud expresa y termina (como trámite) cuando la administración pública se pronuncia sobre éste, aceptando o denegando la solicitud.',
    },
  ],
}
