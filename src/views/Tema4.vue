<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Sistema de Gestión Ambiental (S.G.A.) Norma ISO 140001 del 2015

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema4.jpg", alt="Sistema de Gestión Ambiental (S.G.A.) Norma ISO 140001 del 2015")  

    p.mb-4(data-aos="fade") La norma ISO 14001 llamada 
      strong “Sistemas de Gestión Ambiental”, 
      | es un plan operativo diseñado para que las empresas u organizaciones implementen buenas prácticas ambientales y se certifiquen en el manejo responsable de todo material derivado de sus quehaceres, con lo cual se disminuye la afectación del ambiente. Las instituciones que lo hagan estarán demostrando que están llevando a cabo sus actividades productivas de acuerdo a los estándares que se han fijado en cuanto a materia medioambiental promoviendo la protección del medio natural, la prevención de la contaminación y es el estándar internacional.

    .row.justify-content-center.mb-4(data-aos="fade") 
      .col-lg-10
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/974ruJYHG8c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema4-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 Sistema de Gestión Ambiental
                  p.mb-0.text-small Para más información puede consultar la norma ISO 14001 del 2015 en el siguiente documento.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=http://comunica.sena.edu.co/sigc/docus/ntc-iso_14001.pdf&sa=D&source=editors&ust=1626800379839000&usg=AOvVaw0MEtcfrUzR7Z2eiVHiXjFD')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador


    // 4.1
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h2 4.1. ¿Qué es la segregación?

    p(data-aos="fade") Es el 
      strong proceso en el que se separa de forma correcta y eficiente los distintos productos desechados. 
      | De este modo, se contribuye activamente a economías más sostenibles y limpias capaces de reducir los vertidos y aprovechar los materiales mediante la reducción, reutilización y reciclaje. Esta actividad tiene como objetivo principal pasar de un consumo lineal a uno circular.

    Separador


    // 4.2
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h2 4.2. Separación en la fuente 

    p(data-aos="fade") La Separación en la fuente es la 
      strong actividad que permite seleccionar y almacenar los diferentes residuos sólidos en su lugar de origen para facilitar su posterior manejo y aprovechamiento; 
      | es un mecanismo efectivo para mitigar el impacto negativo de los residuos sólidos en el medio ambiente y prolongar la vida útil de los rellenos sanitarios, pero para esto, se necesita que esta actividad se convierta en un hábito cotidiano de todos los hogares y demás grupos de la sociedad.

    Separador


    // 4.3
    #t_4_3.titulo-segundo(data-aos="fade-right")
      .h2 4.3. Reducir, reutilizar y reciclar  

    p.mb-4(data-aos="fade") A esto se le llama la regla de las tres erres (3R) y se aplica para cuidar el medio ambiente, específicamente para reducir el volumen de residuos o basuras que se generan diariamente. En pocas palabras, las 3R ayudan a tirar menos basura, a ahorrar y a ser un consumidor más consciente y responsable. A continuación, se menciona el significado de las 3R, con el fin de que como aprendiz adquiera el lenguaje técnico que requiere:

    SlyderE(:datos="datosSlyder")

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema4-3-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 3R
                  p.mb-0.text-small Para profundizar sus conocimientos acerca del tema sobre reducir, reutilizar y reciclar, puede revisar el video llamado “3R de la Ecología”.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.youtube.com/watch?v=rRCZzrMjiY0')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    Separador


    // 4.4
    #t_4_4.titulo-segundo(data-aos="fade-right")
      .h2 4.4. Tipos de rotulado y características de almacenamiento  

    p(data-aos="fade") Como se ha mencionado anteriormente, es necesario hacer uso de las 3R, por lo que de acuerdo al Ministerio de la Protección Social los recipientes utilizados para el almacenamiento de residuos sólidos deben tener como mínimo las siguientes características: estar construidos en material rígido, impermeable y resistente a los golpes, que facilite la limpieza y desinfección, además es importante que sean livianos y de un tamaño que permita almacenar los residuos entre recolecciones.  
    p(data-aos="fade") Si se utilizan bolsas desechables estas deben ser resistentes con el fin de que soporten el peso de los residuos contenidos y su manipulación, de un calibre que garantice que no habrá derrame durante la recolección, almacenamiento y disposición final de los residuos que contengan.
    p.mb-4(data-aos="fade") En cuanto al lugar de almacenamiento debe reunir como mínimo las siguientes características: 

    .row
      .col-lg-7.bg-secundario.px-5.py-3.mb-4(data-aos="fade-right")
        ul.lista-ul--color.color-naranja.mb-0
          li 
            i.fas.fa-chevron-right
            | Estar lejos de las áreas de bodega, almacenamiento y preparación de alimentos, galpones y área administrativa.
          li 
            i.fas.fa-chevron-right
            | Debe permitir realizar actividades de limpieza y desinfección.
          li 
            i.fas.fa-chevron-right
            | De fácil acceso para los vehículos recolectores.
          li 
            i.fas.fa-chevron-right
            | Solamente se podrán almacenar residuos sólidos y deberá estar correctamente direccionado. 
          li 
            i.fas.fa-chevron-right
            | Además, deberá contar con recolectores impermeables provistos de tapa que impidan el ingreso de plagas o humedezcan su contenido. 
      .col-lg-5.mb-4(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4-4-imagen1.png", alt="Tipos de rotulado y características de almacenamiento")


    p.mb-4(data-aos="fade") A continuación, se describen algunos tipos de productos sólidos que de acuerdo a su naturaleza se pueden clasificar según se indica en la siguiente infografía interactiva. A continuación, se describen algunos tipos de productos sólidos que de acuerdo a su naturaleza se pueden clasificar según se indica en la siguiente infografía interactiva.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Productos reciclables")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-4-tab1.jpg', alt='Productos reciclables')
          .col-md-1
          .col-md-5
            h4 Productos reciclables
            p Son productos que podrán ser reutilizados en el futuro, siempre y cuando se haya realizado una correcta segregación de residuos. Es el caso de los productos que se utilizan a diario en las empresas y  hogares, tales como: 
            p.mb-0 Papel y cartón (contenedor azul)
            p.mb-0 Vidrio (contenedor verde)
            p.mb-0 Plásticos y envases (contenedor amarillo) 
            p Los metales

      .py-3.py-md-4(titulo="Productos biodegradables")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-4-tab2.jpg', alt='Productos biodegradables')
          .col-md-1
          .col-md-5
            h4 Productos biodegradables
            p Son aquellos productos que se pueden descomponer siguiendo el proceso lógico y natural de la propia naturaleza.
            p Es el caso de productos como: restos de comida, cáscaras de fruta, restos de jardinería, y forraje para animales. 
            p Este tipo de productos se pueden convertir, por ejemplo, en productos naturales como el compost.

      .py-3.py-md-4(titulo="Baterías y productos electrónicos")
        .row.justify-content-center
          .col-md-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema4-4-tab3.jpg', alt='Baterías y productos electrónicos')
          .col-md-1
          .col-md-5
            h4 Baterías y productos electrónicos
            p Es de vital importancia separar este tipo de residuos de otros, ya que su alto grado de contaminación supone una seria amenaza para el equilibrio del entorno. Recuerde que estos deben ser separados y depositados en lugares aptos para su tratamiento. 
            p Cada vez es más habitual encontrar puntos limpios de recogida en las ciudades, para poder desechar este tipo de instrumentos y que no entren en el mismo proceso que otros productos.
                      

    p.mb-4(data-aos="fade") Como puede observar, es de vital importancia tener en cuenta varios elementos al hacer gestión de empresas avícolas en Colombia, ya que, el cumplimiento de estos estándares cuando se vuelven buenas prácticas usadas a diario, genera productos de calidad que se ponen en el mercado nacional e internacional.

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-primario.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema4-4-ico.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.color-primario
                  h4.mb-1 Clasificación de residuos sólidos.
                  p.mb-0.text-small Para ampliar conocimientos sobre la nomenclatura para la clasificación por colores puede ver el video “Clasificación de los residuos sólidos 2019¨.
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://www.youtube.com/watch?v%3DJ2lcgWUqS98&sa=D&source=editors&ust=1626803243930000&usg=AOvVaw2_SDdf64d6Eaf4ojR9EJ2p')" target="_blank")
                    span Enlace web
                    i.fas.fa-link

    Separador


    // 4.5
    #t_4_5.titulo-segundo(data-aos="fade-right")
      .h2 4.5. Clases de rutas


    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p Las rutas de los residuos deben generarse teniendo en cuenta su clasificación, almacenamiento y transporte, para que de forma coordinada se pueda hacer la disposición final. Además, debe llevarse un registro detallado del material que sale y el tipo de disposición, así como de la frecuencia con que sale, incluyendo los horarios. 
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Dentro de las instalaciones debe encontrarse un plano en donde se encuentren marcadas y discriminadas las rutas que se pueden usar, las cuales debe conocer y seguir el personal estrictamente, estas también deben estar direccionadas en físico dentro del plantel. Finalmente, a cada una se le debe asignar un grupo de responsables quienes velarán por que se cumpla la labor correctamente.
            p El cumplimiento de estas rutas es muy importante, puesto que, si se hace un mal manejo, se pueden producir graves afectaciones ambientales y sanitarias a los procesos productivos y a la salud humana.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema4-5.svg", alt="Clases de rutas")



</template>

<script>
import SlyderE from '../components/SlyderE'
export default {
  name: 'Tema4',
  components: {
    SlyderE,
  },
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Regla de las 3R',
        texto:
          'El ser humano es responsable del cuidado del planeta, por lo que se está creando conciencia social colectiva sobre el tema, por esa razón es importante que conozca el significado de la Regla de las 3R y aprenda a usarla en su vida diaria.',
        imagen: require('@/assets/curso/tema4-3-imagen1.jpg'),
      },
      {
        titulo: 'Reducir',
        texto:
          'Se trata de simplificar el consumo de los productos directos, o sea, todos aquellos que se compran y se consumen, ya que tienen una relación directa con los desperdicios, por ejemplo: la caja de los huevos, los empaques, las botellas, las bolsas, entre otros.',
        imagen: require('@/assets/curso/tema4-3-imagen2.jpg'),
      },
      {
        titulo: 'Reutilizar',
        texto:
          'Se refiere a volver a utilizar las cosas  y a darles la mayor utilidad posible antes de que llegue la hora de finalmente deshacernos de ellas, y así, disminuir el volumen de basura. Esta tarea suele ser a la que menos atención se le pone y es una de las más importantes.',
        imagen: require('@/assets/curso/tema4-3-imagen3.jpg'),
      },
      {
        titulo: 'Reciclar',
        texto:
          'La última de las tareas es la de reciclar, que consiste en someter materiales usados o desperdicios a un proceso de transformación o  aprovechamiento para que puedan ser nuevamente utilizados, por ejemplo: el uso de materiales de cartón o restos de comida para hacer el compost.',
        imagen: require('@/assets/curso/tema4-3-imagen4.jpg'),
      },
    ],
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

<style lang="sass" scoped></style>
