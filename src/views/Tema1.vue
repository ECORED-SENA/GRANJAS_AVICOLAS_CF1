<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Seguridad y salud en el trabajo

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema1.jpg", alt="Seguridad y salud en el trabajo")  

    p(data-aos="fade") Esta es una actividad multidisciplinaria que a través de la promoción y prevención busca mejorar el bienestar de los trabajadores al igual que pretende evitar los accidentes en el ambiente laboral. Para lograr esto, se propone que se tengan en cuenta las condiciones de trabajo, así como la organización del mismo, con el fin de reducir sustancialmente los factores de riesgo que puedan derivar en enfermedades o accidentes de tipo laboral.

    Separador


    // 1.1
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h2 1.1. Normatividad, seguridad y salud en el trabajo

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p En Colombia existen diversas normas y leyes que rigen el tema de seguridad y salud en el trabajo, la más actual se registra en el año de 2019 en donde se conceden plazos para hacer la implementación en el sistema de mejoras en los diversos entes y la adopción de las medidas que garanticen en todos los ámbitos el bienestar de los trabajadores; a continuación, se extiende una lista de las principales normas tomadas del autor Germán Campos Gutiérrez médico especialista en medicina laboral, salud ocupacional y  en administración en salud, las cuales pueden ser consultadas por los aprendices para más información.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-1-imagen1.png", alt="Normatividad, seguridad y salud en el trabajo")  
    
    .row.justify-content-center.mb-5
      .col-lg-8
        .cajon.color-secundario.p-4
          .h4 Normatividad, seguridad y salud en el trabajo avícola
          P Las empresas de la industria del sector avícola, como cualquier otra en Colombia deben cumplir con reglamentaciones de la Organización Internacional del trabajo a nivel general y del Ministerio de Trabajo y Seguridad social, con el fin de proteger los derechos de los empleados.  

    .row.justify-content-center.mb-5
      .col-lg-8
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-i2.svg', alt='Infografia de normatividad')

          .tarjeta.color-acento-botones.p-3(x="44%" y="23.5%")
            .h5.mb-2 Ley 1010 2006
            p En donde se adoptan medidas para prevenir, corregir y sancionar el acoso laboral y otros dentro de las relaciones laborales.

          .tarjeta.color-acento-botones.p-3(x="56.5%" y="23.5%")
            .h5.mb-2 Código Sustantivo del Trabajo
            p En el cual se estipula toda la normatividad a nivel nacional para los empleados en general.

          .tarjeta.color-acento-botones.p-3(x="67%" y="29%")
            .h5.mb-2 1951
            p Regulación de relaciones laborales.

          .tarjeta.color-acento-botones.p-3(x="74.5%" y="38%")
            .h5.mb-2 Resolución 1401 2007
            p Por la cual se reglamenta la investigación de incidentes y accidentes de trabajo.

          .tarjeta.color-acento-botones.p-3(x="77%" y="50%")
            .h5.mb-2 Resolución 2346 2007
            p Por la cual se regula la práctica de evaluaciones médicas ocupacionales y el manejo y contenido de las historias clínicas ocupacionales.

          .tarjeta.color-acento-botones.p-3(x="74.5%" y="61.5%")
            .h5.mb-2 Resolución 2646 2008
            p Por la cual se establecen disposiciones y se definen responsabilidades para la identificación, evaluación, prevención, intervención y monitoreo permanente de la exposición a factores de riesgo psicosocial en el trabajo y para la determinación del origen de estas.

          .tarjeta.color-acento-botones.p-3(x="67%" y="72%")
            .h5.mb-2 Resolución 00000652 2012 
            p Por la cual se establece la conformación y funcionamiento del Comité de Convivencia Laboral en entidades públicas y empresas privadas y se dan otras disposiciones.   
          
          .tarjeta.color-acento-botones.p-3(x="56.5%" y="77%")
            .h5.mb-2 Resolución 0312 2019
            p Por la cual se definen los estándares mínimos del Sistema de Gestión de la Seguridad y Salud en el Trabajo, SG-SST.
          
          .tarjeta.color-acento-botones.p-3(x="44%" y="77%")
            .h5.mb-2 Decreto 1072 2015 Decreto Único Reglamentario del Sector Trabajo
            p “El Ministerio de Trabajo fomenta políticas y estrategias para la generación de empleo estable, la formalización laboral, la protección a los desempleados, la formación de los trabajadores, la movilidad laboral, las pensiones y otras prestaciones”.

          .tarjeta.color-acento-botones.p-3(x="33%" y="71.5%")
            .h5.mb-2 Resolución 1409 2012
            p Por la cual se establece el Reglamento de Seguridad para protección contra caídas en trabajo en alturas.    

          .tarjeta.color-acento-botones.p-3(x="23%" y="50%")
            .h5.mb-2 Resolución 1792 1990 
            p Por la cual se adoptan valores límites permisibles para la exposición ocupacional al ruido.


          .tarjeta.color-acento-botones.p-3(x="26%" y="61.5%")
            .h5.mb-2 Decreto-Ley 1295 1994
            p Por el cual se determina la organización y administración del Sistema General de Riesgos Profesionales.
            
          .tarjeta.color-acento-botones.p-3(x="26%" y="38%")
            .h5.mb-2 Resolución 2013 1986
            p Por la cual se reglamenta la organización y funcionamiento de los Comités de Medicina, Higiene y Seguridad Industrial en los lugares de trabajo.

          .tarjeta.color-acento-botones.p-3(x="33%" y="29%")
            .h5.mb-2 Resolución 2400 1979
            p Por la cual se establecen algunas disposiciones sobre vivienda, higiene y seguridad en los establecimientos de trabajo.   






            
    Separador

    
    // 1.2
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h2 1.2. Manejo de insumos ambientales y sanitarios

    p(data-aos="fade") El uso eficiente de los insumos implica tener los cuidados necesarios para que no se produzcan desperdicios en ninguna parte del proceso, el cual también es uno de los principios de las buenas prácticas, porque al final todo el desperdicio termina siendo un desecho y un sobre costo, por eso debe ser organizado y almacenado eficientemente.
    p.mb-4(data-aos="fade") Para lograr la eficiencia en el uso de los insumos se tienen que seguir las siguientes reglas:

    .row
      .col-lg-7.bg-secundario.px-5.py-3(data-aos="fade-right")
        ol.lista-ol--cuadro.mb-0
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Planificar muy bien todo lo que se va a hacer y lógicamente calcular, lo más exacto posible, la cantidad y tipo de insumos que se van a gastar.
          li 
            .lista-ol--cuadro__vineta
              span 2
            | Comprar únicamente lo necesario, ya que, si se compra más de la cuenta, se corre el riesgo de que el producto llegue a estar vencido y entonces habría que desecharlo, generando pérdidas económicas.
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Llevar un inventario de los insumos para garantizar el constante abastecimiento, y de esta forma reducir las sobre existencias.
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Garantizar un manejo eficiente de los recursos.
          li.mb-0
            .lista-ol--cuadro__vineta
              span 5  
            | Hacer verificación de manera periódica para controlar el flujo de insumos en la producción.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-2-imagen1.png", alt="Manejo de insumos ambientales y sanitarios")


    Separador


    // 1.3
    #t_1_3.titulo-segundo(data-aos="fade-right")
      .h2 1.3. Riesgos laborales

    .row.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario2.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p Los riesgos laborales se definen como las eventualidades dañosas a que está sujeto el trabajador, con ocasión o por consecuencia de su actividad. Entre los principales riesgos que se encuentran en el subsector avícola están: la manipulación de sustancias químicas, los cambios de temperaturas dentro de los galpones, exposición a ruido constante, a polvos, vapores y las posiciones prolongadas fuera de los ángulos de confort (Rojas Cárdenas y Salomón Aguilar, 2016).
            .col-lg-4
              img(src="@/assets/curso/tema1-3-imagen1.svg", alt="Riesgos laborales")

    p(data-aos="fade") En Colombia se tienen en cuenta los siguientes documentos: acuerdo al Decreto 1295 (1994) Resolución ICA y la 3651 de 2014 del Instituto Colombiano Agropecuario. Por medio de las cuales se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. Las clases de riesgos se categorizan del 1 al 5, ocupando el sector avícola el 2, sin embargo, una empresa puede cotizar sobre diferentes clases de riesgo, dependiendo de los centros de trabajo que haya establecido. Por ejemplo, una empresa puede tener un centro de trabajo administrativo que cotiza sobre riesgo tipo 1 y otro centro de trabajo productivo que cotiza sobre riesgo tipo 4.

    p.mb-4(data-aos="fade") A continuación, se muestran los tipos de riesgos laborales en las granjas avícolas: los riesgos que pueden presentarse en la labor de las granjas o unidades avícolas son de diferentes tipos como: los biológicos, químicos, higiénicos, psicológicos, riesgos ergonómicos, riesgos físicos mecánicos, riesgos físicos no mecánicos, riesgos eléctricos, riesgos locativos y riesgos explosivos y de incendio.

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-gradiente.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema1-3-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-1 Prevención de riesgos laborales en granjas avícolas
                  p.mb-0.text-small Para ampliar la información sobre los principales riesgos laborales puede consultar el siguiente documento “Prevención de Riesgos Laborales en Granjas Avícolas”. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://libraria.xunta.gal/sites/default/files/downloads/publicacion/2015_200-15_15-00655_-_prevencion_de_riesgos_laborales_en_granjas_avicolas._os_atende_do_issga._folleto.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    Separador


    // 1.4
    #t_1_4.titulo-segundo(data-aos="fade-right")
      .h2 1.4. Dotación de personal y elementos de protección


    .row.mb-4.mb-5
      .col-lg-7(data-aos="fade-right")
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Los Elementos de Protección Personal (E.P.P.) son todos aquellos equipos, aparatos o dispositivos hechos especialmente para proteger o preservar la constitucionalidad física del cuerpo humano de cualquier riesgo que pueda ocasionar un daño o accidente, en especial en la parte laboral. Estos equipos están formados por implementos que deben ser utilizados adecuadamente por los trabajadores, los cuales deben hacer un correcto uso, manejo y mantenimiento adecuados.
            p La selección de los elementos de protección personal difiere de acuerdo a la labor que desempeñe el trabajador, así como del lugar donde esté ubicada, por lo cual las áreas deben ir direccionadas e identificadas. A continuación, se mencionan los elementos básicos que se requieren para la protección de los empleados en una empresa del sector avícola.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema1-4-imagen1.png", alt="Dotación de personal y elementos de protección")

    .row.justify-content-center.mb-5
      .col-lg-8
        h3.titulo-tercero.text-center  Elementos básicos de protección personal en la industria avícola
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-i3.svg', alt='Infografia elementos básicos de protección')

          .tarjeta.color-acento-botones.p-3(x="50%" y="29%")
            .h5.mb-2 Casco
            p Son elementos que permiten proteger la parte de la cabeza del personal para evitar golpes por caídas de objetos, resbalones, contacto con cables o líneas eléctricas.         

          .tarjeta.color-acento-botones.p-3(x="67.5%" y="37%")
            .h5.mb-2 Gafas de seguridad 
            p Es un elemento que protege los ojos de la proyección de partículas sólidas o líquidas en el manejo de sustancias, químicas, biológicas o corrosivas, están elaboradas en policarbonato, con antiempañante. 

          .tarjeta.color-acento-botones.p-3(x="73%" y="56.3%")
            .h5.mb-2  Respirador con protección para material particulado 
            p Este respirador con filtro mecánico para partículas de menos de 10 micras, ayuda en el manejo de los galpones para el polvo, manejo de la cama y alimento de las aves. El respirador se conoce comúnmente como el “N-95” cubre la cara y filtra el aire, suelen ser desechables.  

          .tarjeta.color-acento-botones.p-3(x="60.5%" y="73%")
            .h5.mb-2 Guantes de hule, caucho o plástico
            p Son diseñados para la protección de las manos, en las diferentes labores que se desempeñan dentro de los galpones, tales como limpieza y desinfección. Además, reducen el riesgo de contaminación al evitar el contacto directo con la piel.  

          .tarjeta.color-acento-botones.p-3(x="39.5%" y="73%")
            .h5.mb-2  Guantes de carnaza 
            p Son elementos diseñados para proteger de abrasiones, cortes, rozaduras o golpes, además de mejorar el agarre; en las granjas se utilizan para realizar diversas labores como el manejo de los animales y la adecuación de los galpones. 

          .tarjeta.color-acento-botones.p-3(x="27%" y="56.3%")
            .h5.mb-2  Botas de caucho de caña alta
            p Las botas deben ser de caña alta, para facilitar los trabajos en condiciones húmedas como el lavado y desinfección del galpón, además que permitan la rápida y efectiva limpieza y desinfección de las mismas, deben tener suelas antideslizantes para evitar caídas y accidentes.  

          .tarjeta.color-acento-botones.p-3(x="32%" y="37%")
            .h5.mb-2 Overol antifluidos, lavable e impermeable
            p Este elemento está diseñado para proteger el cuerpo del operario de diferentes sustancias ya sean químicas, biológicas o físicas, así como de material sólido. 

        
            

  

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
