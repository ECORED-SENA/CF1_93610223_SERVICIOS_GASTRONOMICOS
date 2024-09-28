export default {
  global: {
    componenteFormativo: 'Conceptos generales servicios gastronómicos ',
    descripcionCurso:
      'El servicio gastronómico implica ofrecer alimentos de manera higiénica y eficiente, con personal capacitado y herramientas adecuadas. La gastronomía ha evolucionado con nuevas técnicas y tendencias como la gastronomía molecular, el slow food y el uso de tecnología. Los restaurantes buscan combinar calidad, ambiente y servicio para satisfacer al cliente y mejorar los procesos operativos. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Conceptos generales para la prestación de un servicio gastronómico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Evolución en la prestación de un servicio gastronómico',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tendencias en la prestación de un servicio gastronómico',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Máquinas y herramientas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Higiene y manipulación de alimentos',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Conceptos generales',
      referencia:
        'Mise en Place. (2021). Gastronomía: Vocabulario Técnico 1. [Archivo de video] Youtube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=7u1fkKbRVdc&ab_channel=MiseenPlace  ',
    },
    {
      tema:
        'Conceptos generales para la prestación de un servicio gastronómico ',
      referencia:
        'SENA. (2022). Servicios gastronómicos cap 1. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=uPYHui8X5HI&ab_channel=SENA  ',
    },
    {
      tema: 'Evolución en la prestación de un servicio gastronómico ',
      referencia:
        'National Geographic España. (2023). Por qué la cocina fue esencial en nuestra evolución | NATIONAL GEOGRAPHIC ESPAÑA. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=ahART85JF-c&ab_channel=NationalGeographicEspa%C3%B1a  ',
    },
    {
      tema: 'Tendencias en la prestación de un servicio gastronómico ',
      referencia:
        'Gabriel Lozada García. (2018). Gastronomía Molecular. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=4ZD2wK90ZRc&ab_channel=GabrielLozadaGarc%C3%ADa  ',
    },
    {
      tema: 'Máquinas y herramientas ',
      referencia:
        'Yolani Barahona. (2020).Utensilios y equipo de cocina. [Archivo de video] Youtube.    ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=fBDHrlf7aUw&ab_channel=YolaniBarahona  ',
    },
    {
      tema: 'Higiene y manipulación de alimentos ',
      referencia:
        'SENA (). Higiene y Manipulación de Alimentos Cap 04.mp4. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=aeqWCTYT-qk&ab_channel=SENA  ',
    },
  ],
  glosario: [
    {
      termino: 'Alimento no perecedero',
      significado:
        'alimento que puede almacenarse durante un largo periodo de tiempo sin riesgo inmediato de descomposición, siempre que se mantenga en condiciones adecuadas.',
    },
    {
      termino: 'Alimento perecedero',
      significado:
        'producto alimenticio que tiene una vida útil corta y que necesita condiciones especiales de conservación para evitar su deterioro. ',
    },
    {
      termino: 'Buenas Prácticas de Manufactura (BPM)',
      significado:
        'conjunto de normas y procedimientos que aseguran que los alimentos se produzcan bajo condiciones higiénicas adecuadas, minimizando riesgos de contaminación. ',
    },
    {
      termino: 'Contaminación biológica',
      significado:
        'introducción de microorganismos dañinos (bacterias, virus, parásitos) en los alimentos, lo que puede provocar enfermedades. ',
    },
    {
      termino: 'Contaminación cruzada',
      significado:
        'transferencia de bacterias o microorganismos de un alimento a otro, ya sea por contacto directo o a través de utensilios o superficies contaminadas',
    },
    {
      termino: 'Gastronomía molecular',
      significado:
        'técnica culinaria que aplica principios de física y química en la preparación de alimentos, transformando sus ingredientes para crear nuevas texturas y presentaciones.',
    },
    {
      termino: 'Higiene alimentaria',
      significado:
        'prácticas necesarias para garantizar la seguridad y salubridad de los alimentos, desde su producción hasta su consumo. ',
    },
    {
      termino: 'Inocuidad',
      significado:
        'garantía de que los alimentos no causarán daño al consumidor cuando se preparen y/o consuman de acuerdo con su uso previsto. ',
    },
    {
      termino: 'Manipulación de alimentos',
      significado:
        'proceso que incluye todas las acciones realizadas durante la preparación, almacenamiento, transporte y servicio de alimentos, asegurando que se mantengan seguros para el consumo. ',
    },
    {
      termino: '<em>Stand-by</em>',
      significado:
        'función de algunos equipos eléctricos que permite reducir el consumo de energía cuando el equipo no está en uso. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento de Economía y Administración, Organización Hotelera. (2023). <em>Gestión de operaciones y servicios gastronómicos (Programa)</em>. Universidad Nacional de Quilmes. Disponible en RIDAA-UNQ Repositorio Institucional Digital de Acceso Abierto de la Universidad Nacional de Quilmes.',
      link:
        'https://ridaa.unq.edu.ar/bitstream/handle/20.500.11807/4184/Programa%20Libre%20-Gestion%20de%20operaciones%20y%20servicios%20gastronomicos-2023.pdf?sequence=1&isAllowed=y ',
    },
    {
      referencia:
        'Gálvez Herrera, I. A. (2024). Buenas prácticas en el servicio gastronómico del restaurante El Huerto del Sabor de San Juan de la Virgen.',
      link: 'http://repositorio.untumbes.edu.pe/handle/20.500.12874/65225 ',
    },
    {
      referencia:
        'Manzano-Ascanio, C. A., y Pacheco-Sánchez, C. A. (2018). Cultura gastronómica especializada: Innovación más servicios. <em>Revista Científica Profundidad Construyendo Futuro</em>, 8(8), 10–15.',
      link:
        'https://www.researchgate.net/publication/358153630_Cultura_gastronomica_especializada_innovacion_mas_servicios ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
