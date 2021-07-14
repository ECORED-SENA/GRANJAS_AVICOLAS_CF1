export default {
  global: {
    componenteFormativo: 'Plan de manejo ambiental, monitoreo y valoración',
    descripcionCurso:
      'El sector avícola colombiano ha venido trabajando desde hace más de 20 años para mejorar el plan de manejo ambiental, así como, las producciones respecto a prácticas, instalaciones, protocolos, equipos e indumentaria para reducir y mitigar su impacto. Es así como, desde las perspectivas normativas se han implementado las siguientes políticas: bioseguridad, buenas prácticas y producciones limpias, entre otros.',
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
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Normatividad salud y seguridad en el trabajo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Manejo de insumos ambientales y sanitarios',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Riesgos laborales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Dotación del personal y elementos de protección',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Manejo ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Protocolos de manejo ambiental',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Normativa sobre el manejo ambiental',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Normatividad ambiental',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Sistema de Gestión Ambiental (S.G.A.) Norma ISO 140001 de 2015',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '¿Qué es segregación?',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Separación en la fuente',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Reducir, reciclar y reutilizar',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Tipos de rotulado y características de almacenamiento',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Clases de rutas',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Plan de Gestión Integral de Residuos Sólidos (PGIRS)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Sanitización de la gallinaza o pollinaza',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Compostaje de mortalidad',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Huella de carbono',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '6.1',
            titulo: 'Importancia ambiental y económica',
            hash: 't_6_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '6.2',
            titulo:
              'Regulaciones, entidades certificadoras y requerimientos para ingresar a los mercados internacionales',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Guía ambiental para el subsector avícola, FENAVI 2014',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Medidas de prevención, mitigación, control y compensación',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Recurso suelo',
            hash: 't_7_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.3',
            titulo: 'Recurso agua',
            hash: 't_7_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.4',
            titulo: 'Recurso aire',
            hash: 't_7_4',
          },
        ],
      },
    ],
    subMenu: [
      /*{
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
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
  referencias: [
    {
      referencia:
        'Ángeles Carbajal Azcona y María González Fernández (2012) Capítulo 3.  Propiedades y funciones biológicas del agua tomado del libro Agua para la salud. Pasado, presente y futuro. ',
      link:
        'https://www.ucm.es/data/cont/docs/458-2013-07-24-Carbajal-Gonzalez-2012-ISBN-978-84-00-09572-7.pdf',
    },
    {
      referencia:
        'Avicultores Colombia. (2016). Compostaje de mortalidad [Video]. YouTube.',
      link: 'https://youtu.be/fd5mo5Pr1pQ',
    },
    {
      referencia:
        'Avicultores Colombia. (2016). Sanitización de la cama en granjas avícolas [Video]. YouTube. ',
      link: 'https://youtu.be/eCHU31e0DZs',
    },
    {
      referencia:
        'Avicultores Colombia (2016). Manejo de Residuos en granjas avícolas [Video]. YouTube ',
      link: 'https://www.youtube.com/watch?v=3fzop2lQ7Ps',
    },
    {
      referencia:
        'Campos Gutiérrez German. (2020). Normatividad en seguridad y salud en el trabajo. 2019-2020 Colombia',
      link:
        'https://www.seguridad-laboral.es/sl-latam/colombia/normatividad-en-seguridad-y-salud-en-el-trabajo-2019-2020-colombia_20200630.html',
    },
    {
      referencia:
        'California Childcare Health Program. University of California. San Francisco School of Nursing. (2016).',
      link:
        'https://cchp.ucsf.edu/sites/g/files/tkssra181/f/GreenCleaningSanitizingDisinfecting_FCCH_IPM_Sp.pdf',
    },
    {
      referencia:
        'Centro Guatemalteco de Producción más Limpia. (2008). Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala. ',
      link:
        'https://avicultura.info/wp-content/uploads/2016/01/8_Guia_de_Buenas_Practicas_Ambientales_para_el_Sector_Avicola_en_Guatemala.pdf',
    },
    {
      referencia: 'Cornare. (2014). Presentación de Olores. ',
      link: 'https://www.cornare.gov.co',
    },
    {
      referencia:
        'Decreto 1295 de (1994) Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.',
      link:
        'https://www.cvc.gov.co/sites/default/files/Sistema_Gestion_de_Calidad/Procesos%20y%20procedimientos%20Vigente/Normatividad_Gnl/Decreto%201295%20de%201994-Jun-22.pdf',
    },
    {
      referencia:
        'Decreto 1713 (2002) Por el cual se reglamenta la Ley 142 de 1994, la Ley 632 de 2000 y la Ley 689 de 2001, en relación con la prestación del servicio público de aseo, y el Decreto Ley 2811 de 1974 y la Ley 99 de 1993 en relación con la Gestión Integral de Residuos Sólidos.',
      link:
        'https://corponarino.gov.co/expedientes/juridica/2002decreto1713.pdf',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia. (2014). Guía Ambiental para el Subsector Avícola.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia. (s.f.). Guía rápida. Alternativas para el manejo de residuos orgánicos de la producción avícola en granjas.',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-rapida-alternativas-para-el-manejo-de-residuos-organicos-de-la-produccion-avicola-en-granja/',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia. (s.f.). Guía rápida. Alternativas para el manejo de residuos sólidos ordinarios en granjas.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Manejo_Residuos_Solidos.pdf',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia FENAVI – FONAV (2018). Manual de buenas prácticas disponibles para la mitigación de olores en la industria avícola.',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Cartilla_Digital_PRIO_FINAL.pdf',
    },
    {
      referencia:
        'Federación Nacional de Avicultores de Colombia. FENAVI. (2014). Guía Ambiental para el Subsector Avícola.',
      link:
        'https://fenavi.org/publicaciones-programa-ambiental/guia-ambiental-para-el-subsector-avicola/',
    },
    {
      referencia: 'Gut microbiota for health by ESNM. Agente Patógeno.',
      link:
        'https://www.gutmicrobiotaforhealth.com/es/glossary/agente-patogeno/',
    },
    {
      referencia:
        'Instituto Galego de seguridad y salud en el trabajo. (2015). Prevención de riesgos laborales en granjas avícolas.',
      link:
        'https://libraria.xunta.gal/sites/default/files/downloads/publicacion/2015_200-15_15-00655_-_prevencion_de_riesgos_laborales_en_granjas_avicolas._os_atende_do_issga._folleto.pdf',
    },
    {
      referencia:
        'Instituto Mexicano de Tecnología del agua. (s.f.). Tecnologías convencionales de tratamiento de agua y sus limitaciones. ',
      link:
        'https://www.psa.es/es/projects/solarsafewater/documents/libro/04_Capitulo_04.pdf',
    },
    {
      referencia:
        'Ley 1333 de 2009 [Congreso de la República] Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/ley_1333_210709-1.pdf',
    },
    {
      referencia:
        'Ley 1672 de 2013 [Congreso de la República] Por la cual se establecen los lineamientos para la adopción de una poútica pública de gestión integral de residuos de aparatos eléctricos y electrónicos  (RAEE), y se dictan otras disposiciones ',
      link: 'https://fenavi.org/wp-content/uploads/2018/05/ley_1672_2013-1.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible – Colombia (2016). Planes de gestión integral de residuos sólidos. [video], YouTube',
      link: 'https://www.youtube.com/watch?v=GPIcH8RAJTk',
    },
    {
      referencia:
        'Norma Técnica colombiana NTC – ISO 14001 (2014), Instituto Colombiano de Normas Técnicas y Certificación. Por la cual se actualizan los requisitos para el uso de la norma para el sistema de gestión ambiental.',
      link: 'http://comunica.sena.edu.co/sigc/docus/ntc-iso_14001.pdf',
    },
    {
      referencia:
        'Norma Técnica colombiana NTC-ISO 5167. Productos Orgánicos Usados como Abonos o Fertilizantes.',
      link:
        'https://www.cali.gov.co/dagma/loader.php?lServicio=Tools2&lTipo=descargas&lFuncion=descargar&idFile=31838',
    },
    {
      referencia:
        'Política Nacional de Producción y Consumo Sostenible, 2010 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial] ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/Programa_y_consumo_sostenible/polit_nal_produccion_consumo_sostenible.pdf',
    },
    {
      referencia:
        'Política Nacional para la Gestión Integral Ambiental del Suelo (GIAS), 2013 [Ministerio de Ambiente y Desarrollo Sostenible] ',
      link:
        'https://www.minambiente.gov.co/images/Atencion_y_particpacion_al_ciudadano/Consulta_Publica/Politica-de-gestion-integral-del-suelo.pdf',
    },
    {
      referencia:
        'Política Nacional para la Gestión Integral del Recurso Hídrico. 2010 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial] ',
      link:
        'https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Presentaci%C3%B3n_Pol%C3%ADtica_Nacional_-_Gesti%C3%B3n_/libro_pol_nal_rec_hidrico.pdf',
    },
    {
      referencia:
        'Política Ambiental para la Gestión Integral de Residuos o Desechos Peligrosos, 2005 [Ministerio de Ambiente, Vivienda y Desarrollo Territorial]',
      link:
        'http://www.ideam.gov.co/documents/51310/526371/POLITICA+AMBIENTAL+PARA+LA+GESTION+INTEGRAL+DE+RESPEL.pdf/fb42059d-77ec-423b-8306-960dee6bb9c6',
    },
    {
      referencia:
        'Raffino, M. E. (2020) Microorganismo. Última edición: 23 de julio de 2020. ',
      link: 'https://concepto.de/microorganismo/#ixzz6yXj1QdGk',
    },
    {
      referencia:
        'Resolución 30292 de 2017 [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen medidas sanitarias diferenciadas para el control y erradicación de la enfermedad de Newcastle notificable en Colombia. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/04/RESOLUCION-30292-DE-2017.pdf',
    },
    {
      referencia:
        'Resolución 3650 de 2014. [Instituto Colombiano Agropecuario - ICA] Por medio de la cual se establecen los requisitos para el registro como productor de material genético aviar y expedición de licencias de venta de material genético aviar. ',
      link:
        'https://www.ica.gov.co/getattachment/3c2f3642-85a5-4622-91b5-5a31597c2cb4/2014R3-(1).aspx',
    },
    {
      referencia:
        'Resolución 668 de 2016 [Ministerio de Ambiente y Desarrollo Sostenible] Por la cual se reglamenta el uso racional de bolsas plásticas y se adoptan otras disposiciones ',
      link:
        'https://www.minambiente.gov.co/images/57-Resolucion_No._0668-2016.pdf',
    },
    {
      referencia:
        'Resolución 2087 de 2014 [Ministerio de Ambiente y Desarrollo Sostenible]  Por la cual se modifica la Resolución 1747 de 2008, modificada por las Resoluciones 2377 de 2008,990 Y 2249 de 2009, 1004 de 2010, 475 Y 476 de 2011 y 3214 de 2012 y se dictan otras disposiciones ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Resoluci%C3%B3n-2087-de-2014-Protocolo-Monitoreo-control-y-Vigilancia-de-Olores-Ofensivos-1.pdf',
    },
    {
      referencia:
        'Resolución 1541 de 2013 [Ministerio de Ambiente y Desarrollo Sostenible]. Por el cual se establecen los niveles permisibles de calidad del aire o de inmisión, el procedimiento para la evaluación de actividades que generen olores ofensivos y se dictan otras disposiciones. ',
      link:
        'https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/emisiones_atmosfericas_contaminantes/Resoluci%C3%B3n_1541_de_2013_-_Olores_Ofensivos.pdf',
    },
    {
      referencia:
        'Resolución 1207 de 2014 [Ministerio de Ambiente y Desarrollo Sostenible] Por la cual se adoptan disposiciones relacionadas con el uso de aguas residuales tratadas. ',
      link:
        'https://fenavi.org/wp-content/uploads/2018/05/Resoluci%C3%B3n_1207_2014-Reuso-aguas-tratadas-1.pdf',
    },
    {
      referencia:
        'Resolución ICA 3652 de 2014 [Instituto Colombiano Agropecuario.] Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de engorde y se dictan otras disposiciones. ',
      link:
        'https://www.ica.gov.co/getattachment/124802ad-c49c-470d-809e-a9ce5ad3db76/2014R3652.aspx',
    },
    {
      referencia:
        'Resolución ICA 3651 de 2014 [Instituto Colombiano Agropecuario]. Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. ',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      referencia:
        'Resolución ICA 30292 (2007) Por medio de la cual se establecen medidas sanitarias diferenciadas para el control y erradicación de la enfermedad de Newcastle notificable en Colombia. ',
      link: 'https://fenavi.org/documentos/resolucion-30292-de-2017/',
    },
    {
      referencia:
        'Rojas Cárdenas Fredy Jimeneo, Salomón Aguilar Natalia (2016) Condiciones de Salud y Seguridad en el trabajo del personal que labora en una empresa productora de huevos, concentrado de aves y molienda de trigo, de la zona de Cachipay, Mosquera y Bogotá durante el periodo de agosto de 2016.',
      link:
        'https://repository.javeriana.edu.co/bitstream/handle/10554/21815/RojasCardenasFredyJimeno2016.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aspecto ambiental',
      significado:
        'elemento de las actividades, productos y servicios de una empresa que interactúan con el medio ambiente (Norma Técnica Colombiana NTC – ISO 14001, 2004.)',
    },
    {
      termino: 'Cama',
      significado:
        'aquel material que utilizamos en el suelo para la crianza de pollos o otras aves, con capacidad de aislar, absorber humedad y proporcionar confort a los animales. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008).',
    },
    {
      termino: 'Compost',
      significado:
        'es el resultado del proceso de compostaje. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Compostaje',
      significado:
        'es una técnica de estabilización y de tratamiento aerobio de los residuos orgánicos biodegradables, resultado de una actividad microbiológica compleja desarrollada en condiciones controladas. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Desecho',
      significado:
        'cualquier materia líquida, sólida, gaseosa o radioactiva que es descargada, emitida, depositada, enterrada o diluida en volúmenes tales que puedan, tarde o temprano, producir alteraciones en el ambiente. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Gallinaza',
      significado:
        'se le llama así a la excreta de la gallina, la cual posee mayor macro nutrientes como fósforo y nitrógeno en comparación a la pollinaza. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'cuando una acción o actividad produce una alteración, favorable o desfavorable, en el medio o en alguno de los componentes del medio. Hay que hacer constar que el término "impacto" no implica negatividad, ya que éstos pueden ser tanto positivos como negativos. (Norma Técnica Colombiana NTC – ISO 14001, 2004.)',
    },
    {
      termino: 'Medio ambiente',
      significado:
        'entorno en el cual una organización opera, incluidos el aire, el agua, el suelo, los recursos naturales, la flora, la fauna, los seres humanos y sus interrelaciones. (Norma Técnica Colombiana NTC – ISO 14001, 2004.)',
    },
    {
      termino: 'Microorganismos',
      significado:
        'aquellos organismos que, por su tamaño reducido, son imperceptibles a la vista. También denominados “microbios”, estos organismos cuentan con una organización biológica muy básica: una proporción importante de ellos cuentan con apenas una única célula. (Raffino, María Estela, 2020)',
    },
    {
      termino: 'Olores ofensivos',
      significado:
        'es el olor, generado por sustancias o actividades industriales, comerciales o de servicio, que produce fastidio, aunque no cause daño a la salud humana. Sustancia de olor ofensivo: es aquella que, por sus propiedades organolépticas, composición y tiempo de exposición puede causar olores desagradables (Cornare, 2014)',
    },
    {
      termino: 'Patógenos',
      significado:
        'agentes infecciosos que pueden provocar enfermedades a su huésped. Este término se emplea normalmente para describir microorganismos como los virus, bacterias y hongos, entre otros. Estos agentes pueden perturbar la fisiología normal de plantas, animales y humanos. (Gut microbiota for health by ESNM)',
    },
    {
      termino: 'Prevención de la contaminación',
      significado:
        'utilización de procesos, prácticas, técnicas, materiales, productos, servicios o energía para evitar, reducir o controlar (en forma separada o en combinación) la generación, emisión o descarga de cualquier tipo de contaminante o residuo, con el fin de reducir impactos ambientales adversos. (Norma Técnica Colombiana NTC – ISO 14001, 2004.)',
    },
    {
      termino: 'Pollinaza',
      significado:
        'se le llama así a la excreta del pollo. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Residuo',
      significado:
        'material o subproducto industrial considerado, por su cantidad, composición o particular naturaleza, para ser reintegrado a los ciclos, flujos y procesos de la misma u otras cadenas productivas. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Residuo orgánico',
      significado:
        'son todos aquellos que por su composición general y específica son derivados del carbono y tienen la propiedad biodegradable. (Guía de Buenas Prácticas Ambientales para el sector avícola en Guatemala, 2008)',
    },
    {
      termino: 'Sanitización',
      significado:
        'aplicar calor o químicos necesarios para eliminar la mayoría de los gérmenes en una superficie hasta el punto de que no signifiquen un riesgo a la salud. (California Childcare Health Program, University of California, San Francisco School of Nursing, 2016)',
    },
    {
      termino: 'Sistema de Gestión Ambiental (SGA)',
      significado:
        'parte del sistema de gestión de una organización, empleada para desarrollar e implementar su política ambiental y gestionar sus aspectos ambientales. (Norma Técnica Colombiana NTC – ISO 14001, 2004.)',
    },
  ],
  complementario: [
    {
      texto:
        'Eco House-Global. (2020). 3R de la Ecología- Educación Ambiental Digital | Eco House, [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rRCZzrMjiY0',
    },
    {
      texto:
        'Aqualia (2018). Tratamientos para la potabilización del agua. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MyYLLVG8Wkc',
    },
    {
      texto:
        'Wilmer Ortega (2019). Clasificación de residuos sólidos. 2019. [Video]. YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=J2lcgWUqS98',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Johanna Cruz Sarmiento',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario La Granja Regional Tolima',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Silvia Milena Sequeda Cárdenas',
        cargo: 'Evaluadora instruccional',
        centro: 'Centro de Gestión Industrial Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
