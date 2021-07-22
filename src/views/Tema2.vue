<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Manejo ambiental

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema2.jpg", alt="Manejo ambiental")  

    p(data-aos="fade") Son todas las acciones encaminadas a mejorar los procesos productivos con el fin de reducir los niveles de contaminación ambiental a través de evaluaciones del impacto ambiental, la estructuración del sistema de manejo y el control de los procesos de acuerdo con la política existente.

    Separador


    // 2.1
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 2.1. Protocolos de manejo ambiental

    p.mb-4(data-aos="fade") Como parte del sistema de gestión de calidad a nivel ambiental se hace necesario definir protocolos que den pautas respecto a los procesos productivos, ya que la mejora de estos permite un control de la contaminación ambiental en las empresas del sector avícola y su impacto en la comunidad, las cuales podrá profundizar a continuación dando clic sobre cada huevo.
    .tarjeta.tarjeta--azul.p-4.mb-5.bg-light-green
      .stage-container
        .row
          .col-3
            .chicken1
              figure
                img.w200(src="@/assets/curso/chicken-left.svg", alt="Gallo")  
          .col-6
            .grass
              .egg
              .egg
              .egg
              .egg
          .col-3
            .chicken2
              figure
                img.w200(src="@/assets/curso/chicken-right.svg", alt="Gallina")          
        


      SlyderA
        .row.justify-content-center
          .col-md-10
            .outlined-card.py-5
              .row.justify-content-center
                .col-lg-8
                  .p-3
                    h3 Medidas de prevención
                    p.mb-3  Son acciones encaminadas a evitar los impactos, efectos y riesgos ambientales, que pueden causar impactos negativos o daño a las personas, al medio ambiente y/o a la propiedad privada durante la ejecución de una actividad o proyecto.
                    p.mb-5  Las medidas de prevención tienen por finalidad disminuir o evitar que aparezcan efectos desfavorables o indeseables a consecuencia de los riesgos ambientales, a la salud humana o en el medio ambiente, y que pudieran provocar una pérdida, disminución, detrimento o menoscabo significativo a uno o más elementos del mismo, a consecuencia de la ejecución de una actividad o proyecto. 
        .row.justify-content-center
          .col-md-10
            .outlined-card.py-5
              .row.justify-content-center
                .col-lg-8
                  .p-3
                    h3  Medidas de control
                    p.mb-5 Estas se consideran una serie de medidas destinadas a enfrentar con éxito los riesgos identificados en cada una de las etapas de una actividad o proyecto toda vez que ocurra un riesgo específico, minimizando los daños a los trabajadores, a comunidades vecinas, al medio ambiente circundante y a las instalaciones. 
        .row.justify-content-center
          .col-md-10
            .outlined-card.py-5
              .row.justify-content-center
                .col-lg-8
                  .p-3
                    h3 Medidas de mitigación
                    p.mb-5 Estas se entienden como la implementación o aplicación de cualquier política, estrategia, obra y/o acción tendiente a minimizar los impactos adversos que puedan presentarse en cierta actividad productiva o durante las etapas de ejecución de un proyecto y mejorar la calidad ambiental aprovechando las oportunidades existentes.
        .row.justify-content-center
          .col-md-10
            .outlined-card.py-5
              .row.justify-content-center
                .col-lg-8
                  .p-3
                    h3 Medidas de compensación
                    p.mb-5 Son las actividades dirigidas a retribuir a las comunidades, las regiones, localidades y entorno natural, por los impactos o efectos negativos generados por un proyecto, que no puedan ser evitados, corregidos, mitigados o sustituidos.
        






    Separador


    // 2.2
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h2 2.2. Normativa sobre el manejo ambiental

    p.mb-4(data-aos="fade") La normatividad planteada para el manejo ambiental se ciñe particularmente en el plan de manejo ambiental, el cual debe ser diseñado para cada proyecto o actividad en específico; en el caso de la industria avícola hay una gran ventaja del modelo a seguir el cual está contenido en “La Guía Ambiental Para El Subsector Avícola”, la que ilustra a los productores del sector en el diseño y los puntos a seguir, esta guía se tratará más adelante.

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-gradiente.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema2-2-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-1 Guía ambiental para el subsector avícola
                  p.mb-0.text-small Para profundizar en el tema sobre el manejo ambiental puede revisar el siguiente documento. 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://fenavi.org/publicaciones-programa-ambiental/guia-ambiental-para-el-subsector-avicola/&sa=D&source=editors&ust=1626798549913000&usg=AOvVaw1TZst5pe9Pn9hkyOkdr7gV')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass" scoped>
.w200{max-width: 200px}
.w270{max-width: 270px}
</style>
