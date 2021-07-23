<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Plan de Gestión Integral de Residuos Sólidos (PGIRS) 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema5.jpg", alt="Plan de Gestión Integral de Residuos Sólidos (PGIRS)")  

    p.mb-4(data-aos="fade") Para tener una idea general de qué es el Plan de Gestión de Residuos Sólidos y cómo se aplica a la vida cotidiana le invito a ver el video “Planes de gestión integral de residuos sólidos”, que se encuentra a continuación.

    .row.justify-content-center.mb-5(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/egg.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 Planes de gestión integral de residuos sólidos.
                  p.mb-0.text-small Para ampliar su conocimiento acerca del plan de gestión integral de residuos sólidos puede acceder al siguiente video.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://www.youtube.com/watch?v%3DGPIcH8RAJTk&sa=D&source=editors&ust=1626817371295000&usg=AOvVaw0peiwiIXkSI5OOKzwrWbBW')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p La disposición y manejo adecuado de estos recursos, tales como: la gallinaza, la cáscara de huevo, la mortalidad y las bandejas de huevo, entre otros; se considera de mucha importancia, ya que, estas contribuyen a la sostenibilidad y eficiencia de la producción, puesto que, permiten que se garantice la aplicación de las buenas prácticas, la bioseguridad y las producciones limpias en el desarrollo de las actividades diarias avícolas, garantizando que no se generen molestias en el entorno por generación de olores y plagas.
            p De acuerdo con lo establecido en el Decreto 1713 (2002), un residuo sólido es cualquier objeto, material, sustancia o elemento sólido que resulta del consumo o uso de un bien en actividades domésticas, industriales, comerciales, institucionales y de servicios que el generador abandona, rechaza o entrega, y que es susceptible de aprovechamiento o transformación en un nuevo bien, con valor económico o de disposición final. De forma general estos, pueden dividirse en tres grupos, para conocerlos revise el siguiente objeto digital de aprendizaje:
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5-imagen.png", alt="Imagen decorativa")

    TabsB.color-acento-contenido.tabs-custom.mb-5
      .py-4.py-md-5(titulo="Residuo sólido aprovechable" :icono="require('@/assets/curso/tema5-tabs-ico1.svg')")
        .row.justify-content-center
          .col-lg-10
            h4 Residuo sólido aprovechable
            p Es cualquier material, objeto, sustancia o elemento sólido que no tiene valor de uso directo o indirecto para quien lo genere, pero que es susceptible de incorporación a un proceso productivo. 
            p Entre los aprovechables, se encuentran: papel blanco usado por ambas caras, papel de archivo, cartón, papel cartón y plastificado, papel periódico, revistas, plástico, vidrio, madera y metal, entre otros.
            .row.justify-content-center
              .col.iconos-tabs-internos
                img(src="@/assets/curso/papel.svg", alt="papel")
                p.text-center Papel
              .col.iconos-tabs-internos
                img(src="@/assets/curso/paquete.svg", alt="paquete")
                p.text-center Paquete  
              .col.iconos-tabs-internos
                img(src="@/assets/curso/magazine.svg", alt="Revistas")
                p.text-center Revistas
              .col.iconos-tabs-internos
                img(src="@/assets/curso/filled-outline.svg", alt="Plásticos")
                p.text-center Plásticos
              .col.iconos-tabs-internos
                img(src="@/assets/curso/botella-rota.svg", alt="Vidrio")
                p.text-center Vidrio
              .col.iconos-tabs-internos
                img(src="@/assets/curso/haz.svg", alt="Metal")
                p.text-center Metal
              .col.iconos-tabs-internos
                img(src="@/assets/curso/tablero-de-madera.svg", alt="Madera")
                p.text-center Madera          

      .py-4.py-md-5(titulo="Residuo sólido no aprovechable" :icono="require('@/assets/curso/tema5-tabs-ico2.svg')")
        .row.justify-content-center
          .col-lg-10
            h4 Residuo sólido no aprovechable
            p Es todo material o sustancia sólida o semisólida de origen orgánico e inorgánico, putrescible o no, que proviene de actividades domésticas, industriales, comerciales, institucionales y de servicios que no ofrece alguna posibilidad de aprovechamiento, reutilización o reincorporación en un proceso productivo.
            p Son aquellos, que no tienen algún valor comercial, requieren tratamiento y disposición final que genera costo para su disposición.
            .row.justify-content-center
              .col.iconos-tabs-internos
                img(src="@/assets/curso/escoba.svg", alt="Actividades domésticas")
                p.text-center Actividades domésticas
              .col.iconos-tabs-internos
                img(src="@/assets/curso/industria.svg", alt="Actividades industriales")
                p.text-center Actividades industriales  
              .col.iconos-tabs-internos
                img(src="@/assets/curso/cocina.svg", alt="Actividades comerciales")
                p.text-center Actividades comerciales

      .py-4.py-md-5(titulo="Residuos peligrosos" :icono="require('@/assets/curso/tema5-tabs-ico3.svg')")
        .row.justify-content-center
          .col-lg-10
            h4 Residuos peligrosos
            p Son aquellos que sin serlo en su forma original se transforman por procesos naturales en residuos peligrosos.
            p Estos están definidos como aquellos que, por sus características infecciosas, tóxicas, explosivas, corrosivas, inflamables, volátiles, combustibles, radiactivas o reactivas puedan causar riesgo a la salud humana o deteriorar la calidad ambiental hasta niveles que causen riesgo a la salud humana. 
            p Así mismo, se consideran peligrosos los siguientes elementos: los envases, empaques y embalajes que hayan estado en contacto con ellos.      
            .row.justify-content-center
              .col.iconos-tabs-internos
                img(src="@/assets/curso/bateria.svg", alt="bateria")
              .col.iconos-tabs-internos
                img(src="@/assets/curso/gas.svg", alt="gas")
              .col.iconos-tabs-internos
                img(src="@/assets/curso/bombillo.svg", alt="bombillo") 

    p.mb-4(data-aos="fade") Todos los residuos sólidos generados durante las diferentes actividades humanas y económicas deben recibir una disposición final adecuada, con el fin de evitar la contaminación ambiental y contribuir con la conservación de los recursos naturales. (Decreto 1713, 2002)

    .row.justify-content-center
      .col-lg-10
        .tarjeta.color-secundario.p-4.p-md-5.mb-5
          .row.justify-content-around.align-items-center
            .col-lg-5.col-8.col-sm-5.col-md-4.mb-4.mb-md-0
              img(src="@/assets/curso/tema5-llamado-accion.svg")
            .col-md.col-lg-7
              .titulo-segundo.mb-4
                h3 Guía rápida de alternativas para el manejo de residuos sólidos ordinarios en la granja.
              p.mb-4 Para profundizar sobre el manejo de residuos sólidos puede revisar la “Guía rápida de alternativas para el manejo de residuos sólidos ordinarios en la granja” generado por la Federación Nacional de Avicultores – FENAVI.              
              a.boton.color-acento-botones(:href="('https://www.google.com/url?q=https://fenavi.org/wp-content/uploads/2018/05/Guia_Rapida_Ambiental_Manejo_Residuos_Solidos.pdf&sa=D&source=editors&ust=1626817371309000&usg=AOvVaw2mIzxNsGh2tDObTH-imsvh')" target="_blank" type="application/pdf")
                span Descargar
                i.fas.fa-file-download

    p.mb-4(data-aos="fade") Clasificación de los residuos sólidos en el sector avícola.           

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Residuos Orgánicos")
        .row.justify-content-center
          .col-lg-10
            .row.justify-content-around
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema5-tabs1-imagen1.jpg', alt='Residuos Orgánicos')
              .col-md-5
                h4 Residuos Orgánicos
                ul.lista-ul--color.color-naranja.mb-0
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Gallinaza.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Aves muertas (mortalidad).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Cáscara de huevo.
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Residuos de limpieza en galpón o en área de guacales. 
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Residuos orgánicos de alimentos en área de casino y comedor.
              
      .py-3.py-md-4(titulo="Residuos convencionales no peligrosos")
        .row.justify-content-center
          .col-lg-10
            .row.justify-content-around
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema5-tabs1-imagen2.jpg', alt='Residuos convencionales no peligrosos')
              .col-md-5
                h4 Residuos convencionales no peligrosos
                ul.lista-ul--color.color-naranja.mb-0
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Bandeja de cartón.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Empaque de polipropileno (lonas de alimento, aserrín o piedrilla).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Implementos de aseo desgastados (traperos, escobas, canecas, cepillos).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Empaques o envolturas de alimentos y bebidas.
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Bolsas plásticas.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Cajas de cartón.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Papel industrial (oficina).
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Residuos de metal (chatarra).
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Papel sanitario.

      .py-3.py-md-4(titulo="Residuos peligrosos")
        .row.justify-content-center
          .col-lg-10
            .row.justify-content-around
              .col-md-6.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema5-tabs1-imagen3.jpg', alt='Residuos peligrosos')
              .col-md-5
                h4 Residuos peligrosos
                ul.lista-ul--color.color-naranja.mb-0
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Envases de desinfectantes, detergentes y plaguicidas (plásticos).
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Envases de medicamentos (plástico y vidrio).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Envases de vacunas (plástico y vidrio).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Envases de aceites y grasas (plásticos).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Jeringas.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Material corto punzante.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Residuos de aceite usado en mantenimiento.
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Residuos de plaguicidas (rodenticida).
                  li.mb-0 
                    i.fas.fa-chevron-right
                    | Luminarias (bombillos ahorradores de luz, tubos fluorescentes). 
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Dotación usada para la fumigación de plaguicidas (filtros).
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Aceites de motores y compresores.
                  li.mb-0  
                    i.fas.fa-chevron-right
                    | Filtros de maquinaria.                   

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema5-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 Manejo de residuos en granjas avícolas
                  p.mb-0.text-small Para conocer más acerca del manejo de residuos sólidos en una granja puede ver el video “Manejo y disposición de residuos sólidos en granjas avícolas” .
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=http://www.youtube.com/watch?v%3D3fzop2lQ7Ps&sa=D&source=editors&ust=1626817371279000&usg=AOvVaw0q7iZgqpLOj5BtRB32uMvF')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    p.mb-4(data-aos="fade") Los residuos más representativos dentro del proceso de producción avícola, tanto para carne como para huevo, son: los orgánicos, principalmente la gallinaza y la mortalidad, esto por su cantidad, volumen y características.

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario2.mb-4.p-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.mx-lg-3.my-3
                p Por otro lado, su inadecuada disposición o mal manejo, puede generar aumento de olores ofensivos, propagación de vectores (mosca y roedores), incremento de problemas sanitarios por la propagación de patógenos presentes en estos residuos y aumento de problemas en la salud de la comunidad, además del incumplimiento de la normatividad existente en términos de sanidad animal (FENAVI - FONAV, 2018).
            .col-lg-4
              img(src="@/assets/curso/tema5-imagen.svg", alt="Imagen decorativa")

    p(data-aos="fade") Para ello se han adoptado dos procesos con el fin de mitigar y controlar los efectos de estos dos residuos.

    Separador


    // 5.1
    #t_5_1.titulo-segundo
      .h2 5.1. Sanitización de la gallinaza o pollinaza

    .row.justify-content-center
      .col-lg-10
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/bAIiOGv5GyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p De acuerdo a la resolución ICA 30292 (2007) la sanitización es una serie de procesos físicos y/o químicos y/o biológicos, a los cuales debe ser sometida la gallinaza y pollinaza cuyo propósito es reducir la presencia de microorganismos patógenos en estos subproductos, antes de ser retirados de la granja o reutilizados en la misma granja.
            p Como parte de su aprendizaje se hace necesario conocer ¿cómo se sanitiza la cama?, para sanitizar la gallinaza se requiere que todo el material esté expuesto y que conserve la misma temperatura, pero este proceso debe ser controlado y por tiempo mínimo definido específico.
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5-1-imagen.png", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") En la siguiente figura se especifican los pasos a seguir para hacer una correcta sanitización de la gallinaza o pollinaza.      
    .row.justify-content-center.mb-5
      .col-lg-12
        PasosA.color-primario.pasos-custom.mb-4(tipo="n")
          .row
            .col-md-11.mb-4.mb-md-0
              p 
                strong Homogenizar cama
              p Flamear y picar para eliminar material empastado.
          .row
            .col-md-11.mb-4.mb-md-0
              p 
                strong Humedecer la cama y hacer pilas
              p Humedecer la cama y formar pilas, moviendo el material hacia el centro del galpón. Se debe verificar la humedad alcanzada realizando la prueba de puño (al empuñar una cantidad de material este debe ser compacto). El alto de la pila debe ser la mitad de ancho de la base y no menor a 1,50 metros. 
          .row
            .col-md-11.mb-4.mb-md-0
              p 
                strong Cubrir con plásticos
              p Al terminar el apilamiento de toda la cama se debe cubrir con un plástico de calibre grueso para contribuir con el aumento de la temperatura, por otro lado, a cada pila se le debe hacer un registro (llevar seguimiento y control de la temperatura), para lo cual deben identificarse independientemente a través de numeración.
          .row
            .col-md-11.mb-4.mb-md-0
              p 
                strong Seguimiento y control de la temperatura en las pilas
              p Diariamente se debe realizar la medición de la temperatura y llevar los registros correspondientes, cuando se alcancen los 52 - 55°C se dejan reposar las pilas durante dos días, es decir, se restringe el movimiento.
          .row
            .col-md-11.mb-4.mb-md-0
              p 
                strong Enfriamiento de retiro del material 
              p Tras el período de reposo, se extienden las pilas para que se enfríen y se empacan para sacarlas del galpón.         

    Separador


    // 5.2
    #t_5_2.titulo-segundo(data-aos="fade-right")
      .h2 5.2. Compostaje de mortalidad

    .row
      .col-lg-7.mb-5(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p La disposición de las mortalidades que acompañan al proceso normal de producción avícola, deben realizarse regularmente dentro de las primeras 24 a 48 horas de acontecida la muerte de las aves, en términos prácticos, al menos una vez al día y con métodos que impidan la diseminación de microorganismos patógenos hacia las aves sanas, así como, la proliferación de fauna nociva. 
            p El compostaje, es una alternativa que le posibilita al productor transformar de manera segura los residuos orgánicos y obtener con ellos un producto más simple y estable. En este proceso la materia orgánica que conforma los organismos vivos se transforma en sustancias más simples. Se desarrolla en presencia de oxígeno y lo llevan adelante microorganismos (bacterias y hongos) que se encuentran en el ambiente, por lo cual, es un proceso natural.
      .col-lg-5.mb-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema5-2-imagen.png", alt="Imagen decorativa")

    p.mb-4(data-aos="fade") Durante el proceso se desarrollan las siguientes etapas:

    .row.justify-content-center.mb-5
      .col-lg-8
        LineaTiempoD.color-primario.linea-custom
          .row.justify-content-center(numero="1" titulo="Etapa mesofílica")
            .col-md-2.col-4.mb-4.mb-md-0.mt-3
              img.px-lg-3(src="@/assets/curso/tema5-2-ico-1.svg", alt="Etapa mesofílica")
            .col-md-8.mt-3
              h3 Etapa mesofílica
              p La mezcla alcanza temperaturas de hasta 40°C.
          .row.justify-content-center(numero="2" titulo="Etapa termofílica o de higienización")
            .col-md-2.col-4.mb-4.mb-md-0.mt-3
              img.px-lg-1(src="@/assets/curso/tema5-2-ico-2.svg", alt="Etapa termofílica o de higienización")
            .col-md-8.mt-3
              h3 Etapa termofílica o de higienización
              p La mezcla alcanza temperaturas que superan los 60°C, por lo cual se produce la muerte de los microorganismos patógenos (causantes de enfermedades).
          .row.justify-content-center(numero="3" titulo="Etapa de enfriamiento o mesófila II")
            .col-md-2.col-4.mb-4.mb-md-0.mt-3
              img.px-lg-2(src="@/assets/curso/tema5-2-ico-3.svg", alt="Etapa de enfriamiento o mesófila II")
            .col-md-8.mt-3
              h3 Etapa de enfriamiento o mesófila II
              p  La temperatura comienza a descender hasta igualar la ambiental.
          .row.justify-content-center(numero="4" titulo="Etapa de maduración")
            .col-md-2.col-4.mb-4.mb-md-0.mt-3
              img.px-lg-2(src="@/assets/curso/tema5-2-ico-4.svg", alt="Etapa de maduración")
            .col-md-8.mt-3
              h3 Etapa de maduración
              p La mezcla se encuentra estable.
          
    p(data-aos="fade") Para compostar, se debe contar con un espacio con un área mínima requerida del 5% de la capacidad de encasetamiento y un área adicional para manejo de contingencias.
    p.mb-4(data-aos="fade") Existen dos métodos generales de compostaje aplicables a la mortalidad:

    .row.justify-content-center
      .col-lg-10
        .row
          .col-lg-6.mb-4
            .tarjeta-hover-imagenes
              .tarjeta-hover-imagenes__textos.bg-acento-contenido.justify-content-center.align-items-center.p-5.d-flex
                .elementos
                  img(src='@/assets/curso/tema5-2-hover-ico1.svg', alt='Apilamiento').mb-2
                  h4.text-center Apilamiento
              .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/tema5-2-hover-img1.jpg', alt='foto Apilamiento')
          .col-lg-6.mb-4
            .tarjeta-hover-imagenes(@mouseover="mostrarIndicador = false")
              .indicador--click(v-if="mostrarIndicador")   
              .tarjeta-hover-imagenes__imagen: img(src='@/assets/curso/tema5-2-hover-img2.jpg', alt='foto Encajonamiento')
              .tarjeta-hover-imagenes__textos.bg-acento-contenido.d-flex.justify-content-center.align-items-center.p-5
                .elementos
                  img(src='@/assets/curso/tema5-2-hover-ico2.svg', alt='Encajonamiento').mb-2
                  h4.text-center Encajonamiento

    p.mb-5(data-aos="fade") El principio es el mismo, sólo que el método de encajonamiento requiere un poco más de inversión y mano de obra, pero permite un mejor control sobre los microorganismos patógenos, lo cual lo hace más eficiente. Por lo cual, este método se explicará más detalladamente a continuación.


    h3 Compostera y cajones

    p(data-aos="fade") La compostera es la infraestructura donde se ubica el compost, esta puede ser un kiosco o caseta, la cual debe contar con ciertas especificaciones que se mencionan más adelante; y los cajones, como ya se había dicho, son los contenedores en donde se almacenará y tratará el compost. En seguida se conocerán algunas exigencias para su diseño y construcción.
    p.mb-4(data-aos="fade") Para hacer el compost se hace necesario contar con varios elementos indispensables, los cuales son:

    TabsA.color-acento-botones.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img1.jpg', alt='La compostera')
          .col-lg-5
            h3 La compostera
            p Es una estructura que debe ubicarse en una zona lo suficientemente alejada de los galpones para evitar contaminación de cualquier tipo, ya sea, por el flujo del personal o por las corrientes de aire; además se debe evitar la obstaculización por arbusto, paredes u otros elementos.
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: ubicación")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img2.jpg', alt='La compostera: ubicación')
          .col-lg-5
            h3 Ubicación
            p No debe estar cerca de fuentes de agua como ríos, nacimientos, quebradas, arroyos, lagunas, ni en una pendiente. 
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: distribución")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img3.jpg', alt='La compostera: distribución')
          .col-lg-5
            h3 Distribución 
            p Se debe elegir una distribución que 
              strong evite el humedecimiento y que permita la aireación del material
              | , así como el 
              strong acopio de los productos 
              | biológicos (pollinaza o gallinaza y mortalidad) y de los elementos utilizados durante el proceso que faciliten la labor.
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera debe")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img4.jpg', alt='La compostera debe')
          .col-lg-5
            h3 La compostera debe
            p Contar con un  techo que cubra holgadamente el área efectiva de compostaje, con una 
              strong altura de 2,2 a 2,5 m y un alero mínimo de 1,5 m 
              | para evitar que lluvias con viento humedezcan el compost. 
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: diseño")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img5.jpg', alt='La compostera: diseño')
          .col-lg-5
            h3 Diseño
            p Para optimizar el espacio de construcción se pueden diseñar dos líneas de cajones con cuatro compartimentos.  
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: terminado")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img6.jpg', alt='La compostera: terminado')
          .col-lg-5
            h3 Terminado
            p El piso 
              strong debe ser impermeabilizado 
              | con broza o idealmente con una base de cemento para permitir mayor orden y evitar que la humedad proveniente del suelo dañe la mezcla, el borde debe ser de 2 a 3 cm y una pendiente del 3% desde el centro al exterior de la estructura.  
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: seguridad")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img7.jpg', alt='La compostera: seguridad')
          .col-lg-5
            h3 Seguridad
            p Además, con el fin de direccionar las aguas lluvias y evitar procesos de erosión, reboses o infiltraciones debe asegurarse la construcción de zanjas de desagüe o canales que permitan correr el agua. 
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: cajones")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img8.jpg', alt='La compostera: cajones')
          .col-lg-5
            h3 Cajones
            p Los cajones deben medir 1,5 m de largo X 1,5 m de ancho y 1,6 m de altura.  
      .tarjeta.tarjeta--gris.p-4(titulo="La compostera: funcionalidad")
        .row.justify-content-center
          .col-lg-6
            img.mb-3(src='@/assets/curso/tema5-2-pestanas-img9.jpg', alt='La compostera: funcionalidad')
          .col-lg-5
            h3 Funcionalidad
            p Para facilitar la operatividad, cada cajón debe tener tres laterales fijos y uno desmontable. Este último debe permitir la entrada de una pala frontal para facilitar la tarea de extracción del compost o en el caso de que sea manual, y permitir al operario trabajar cómodamente.           
      

    h3.mb-4 ¿Cómo hacer el compostaje?

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-a.color-primario2.mb-4.p-3
          .row.m-0.align-items-center.justify-content-center
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4.mx-lg-3.my-3
                p Para hacer el compost es necesario hacer secuencialmente paso a paso el proceso, con el fin de que este sea exitoso, ya que se deben guardar las proporciones, los tiempos, las cantidades y las formas en las que van almacenados, mezclados y organizados cada uno de los componentes de este proceso, por eso hay que tener en cuenta la siguiente figura en la que  se explica detalladamente la elaboración de este producto.
            .col-lg-4.img-compostaje
              img(src="@/assets/curso/tema5-2-compostaje.svg", alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-8
        .row.justify-content-center.align-items-center.bg-image-1.py-lg-5
          .col-lg-2.col-3.numero-color
            h2.text-center 1
          .col-lg-9
            p Distribuir una capa de 30 cm de gallinaza o pollinaza uniformemente mezclada con material vegetal y abrir la capa de aves muertas con 15 cm de cama pollo húmeda. A partir de este momento se recomienda el uso de cama húmeda para no tener que humedecer las aves.

        .row.justify-content-center.align-items-center.bg-image-2.py-lg-5
          .col-lg-2.col-3.numero-color
            h2.text-center 2
          .col-lg-9
            p Abrir el ave en la zona abdominal e introducir sus patas. Depositar una capa de aves muertas, disponiendo cada cadáver en forma contigua, intercalando cabeza y cola para optimizar el espacio, pero sin superposición. Esta capa debe estar a 15 cm respecto de los laterales.

        .row.justify-content-center.align-items-center.bg-image-3.py-lg-5
          .col-lg-2.col-3.numero-color
            h2.text-center 3
          .col-lg-9
            p Humedecer los cadáveres rociándolos hasta alcanzar un 60% teniendo cuidado de no excederse y encharcar el material. También, el uso de cama húmeda se recomienda para no tener que humedecer las aves.
        
        .row.justify-content-center.align-items-center.bg-image-2.py-lg-5
          .col-lg-2.col-3.numero-color
            h2.text-center 4
          .col-lg-9
            p.texto-largo Cubrir las aves con gallinaza o pollinaza, iniciando por el sellamiento del espacio entre ellas. Continuar así hasta una altura de 120 a 150 cm. Aunque la altura del cajón lo permitiera no conviene superar esta altura porque el peso del material comprime la masa inferior, favoreciendo la anaerobiosis (falta de oxígeno) y la consiguiente producción de olores desagradables y atracción de mosca.

        .row.justify-content-center.align-items-center.bg-image-final.py-lg-5
          .col-lg-2.col-3.numero-color
            h2.text-center 5
          .col-lg-9
            p Una vez se complete la última capa de disposición de mortalidad se deben cubrir las aves completamente.  El proceso de llenado de los cajones debe durar 20 días, a partir de los cuales, se contarán 30 adicionales para realizar el volteo del material.


    p.mb-4(data-aos="fade") A continuación, se describe el procedimiento para hacer un correcto volteo del compost, la verificación de la humedad y el control del tiempo en las etapas que garanticen la calidad del producto, además de cómo realizar la clasificación del material que va a ser retirado y el que seguirá dentro del proceso, puede revisar la siguiente figura:

    .row.justify-content-center.bg-verde2.p-4.mb-5
      SlyderA.slider-tarjetas.mb-5
        .row.justify-content-center
          .col-md-4.mb-md-0
          .col-md-4.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono1.svg', alt='Calendario')
            p.text-center.px-lg-0.px-4 Tras 30 días, se debe desarmar el cajón y retirar el material para cortar los restos y palearlo.
          .col-md-4.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono2-1.svg', alt='humedad')
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono1-1.svg', alt='Calendario')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono2.svg', alt='humedad')
            p.text-center.px-lg-0.px-4 Verificar la humedad a través de la prueba del puño y corregir según sea el caso.
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono3-1.svg', alt='cajon') 
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono2-1.svg', alt='humedad')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono3.svg', alt='cajon')
            p.text-center.px-lg-0.px-4 Ingresar el material nuevamente al cajón y cubrir completamente con gallinaza o pollinaza.
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono4-1.svg', alt='calendario')
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono3-1.svg', alt='humedad')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono4.svg', alt='cajon')
            p.text-center.px-lg-0.px-4 Al cumplir con el tiempo se extrae el material y se cierne con un tamiz.
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono5-1.svg', alt='calendario') 
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono4-1.svg', alt='humedad')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono5.svg', alt='cajon')
            p.text-center.px-lg-0.px-4 A partir de este momento se cuentan 30 días más para el retiro del material.
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono6-1.svg', alt='calendario')
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono5-1.svg', alt='humedad')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono6.svg', alt='cajon')
            p.text-center.px-lg-0.px-4 En el proceso de retiro, los restos de carcazas o partículas gruesas pueden ser trituradas en molino o enterradas, aplicando cal para impermeabilizar.
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono7-1.svg', alt='calendario')
        .row.justify-content-center
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--verde
            img.mb-4(src='@/assets/curso/tema5-1-icono6-1.svg', alt='humedad')   
          .col-md-3.py-lg-4.mb-md-0.tarjeta.tarjeta--blanca.py-4
            img.mb-4(src='@/assets/curso/tema5-1-icono7.svg', alt='cajon')
            p.text-center.px-lg-0.px-4 Las partículas finas se empacan dado que el producto secundario ha culminado el proceso de compactación.
          .col-md-3.py-lg-4.mb-md-0                       


    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema5-2-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 El compostaje
                  p.mb-0.text-small Para mayor comprensión sobre el compostaje dentro de las prácticas ambientales y sanitarias en la labor avícola, puede ver el video llamado “Compostaje de mortalidad”
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://youtu.be/fd5mo5Pr1pQ&sa=D&source=editors&ust=1626817371283000&usg=AOvVaw3ncWfLUwj4eePhIy4wD2ou')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    p.mb-4(data-aos="fade") Los procesos anteriores de manejo de la gallinaza y pollinaza, así como, el manejo adecuado de la mortalidad hacen parte fundamental en la normatividad ambiental y sanitaria dentro del ámbito avícola, por lo que los esfuerzos del gremio se han dirigido a hacer un documento para el sector que sirva como guía para todos los productores, profesionales y operarios que intervienen activamente en la actividad, esto se hace con el fin de prevenir, controlar y mitigar desde todo punto de vista el impacto ambiental que pueda ocurrir a partir de la producción. Es así como nace la Guía Ambiental para el Subsector Avícola, como un documento central y básico en el tema ambiental, que a continuación se abordará.

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema5-2-ico2.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 Guía ambiental para el subsector avícola
                  p.mb-0.text-small Para profundizar en las pautas del sector avícola puede leer “Guía ambiental para el subsector avícola”
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf&sa=D&source=editors&ust=1626817371270000&usg=AOvVaw1i98O0LHnPKEYCdLPXjQaN')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download



</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.tarjeta-hover-imagenes
  position: relative
  &:hover
    .tarjeta-hover-imagenes__textos
      cursor: pointer
      width: 0%
      img, p
      opacity: 0%

  &__textos
    transition: all (0.5s)
    align-items: center
    align-content: center
    width: 100%
    height: 100%
    position: absolute
    top: 0
    img
      width: 72px
      margin: auto
  &__imagen
    cursor: pointer
    transition: all (0.5s)

.titulo_recuadro
  h4
    margin-left: 30px
  position: relative
  &:before
    content: ""
    position: absolute
    left: 0
    top: 0
    transform: translateY(-6%)
    width: 25px
    height: 25px
</style>
