<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Huella de carbono

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema6.jpg", alt="Huella de carbono")  

    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p Es uno de estos nuevos términos que cada vez están más presentes en nuestra actividad. Se trata de un indicador ambiental clave, que refleja los gases emitidos por un individuo o empresa.
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p Estos gases que se acumulan en la atmósfera son lo que producen el efecto invernadero.
            p  En resumidas cuentas, se puede definir la huella de carbono como el impacto que deja la actividad humana sobre el medio ambiente. Es decir, la marca ambiental que genera una persona, producto u organización sobre el planeta debido a sus acciones diarias, totalizadas según parámetros de emisiones de dióxido de carbono (CO2) y otros gases de efecto invernadero (GEI) liberadas a la atmósfera.
        p A continuación, se revisarán otros temas que son vitales para entender cómo cada ser humano es responsable del cuidado del medio ambiente en el planeta y cómo impacta la sociedad en general.    
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6-imagen1.png", alt="Imagen decorativa")    

    Separador


    // 6.1
    #t_6_1.titulo-segundo(data-aos="fade-right")
      .h2 6.1. Importancia ambiental y económica


    .row.mb-4
      .col-lg-7(data-aos="fade-right")
        p La Huella de Carbono (HC) tiene una gran importancia en el medio ambiente como indicador de sostenibilidad y de impacto hacia el cambio climático, ya que aporta información sobre la cantidad de gases de efecto invernadero (GEI) que se emite a la atmósfera en el desarrollo de una actividad humana, ya sea esta individual o colectiva.
        .bloque-texto-b.bloq2.color-secundario
          .bloque-texto-b__texto
            p En el ámbito productivo esto significa que, se deben controlar las emisiones de gases, las cuales se pueden identificar y reducir, lo cual afectaría positivamente los costos de producción, aumentando la eficiencia y competitividad de la empresa y cumpliendo así con las pautas de entidades internacionales en el tema.
            p Como consecuencia del cambio climático, se han desarrollado iniciativas internacionales que promueven el cuidado del medio ambiente, con el fin de reducir las emisiones que se lanzan a la atmósfera, esto necesariamente ha llevado a la creación de entidades certificadoras que determinan si una empresa (para este caso: sector avícola), país o población está cumpliendo con lo pactado a nivel mundial, a continuación, se tocarán esos temas.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6-1-imagen1.png", alt="Importancia ambiental y económica")

    Separador


    // 6.2
    #t_6_2.titulo-segundo(data-aos="fade-right")
      .h2 6.2. Regulaciones, entidades certificadoras y requerimientos para ingresar a los mercados internacionales

    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        .cajon.color-primario.p-4.mb-4
          p El impacto ambiental de la Huella de Carbono se controla a través de unas mediciones en las emisiones de gases que son lanzados a la atmósfera durante todo el ciclo de vida. Hay normativas internacionales como 
            strong ISO 14064, ISO 14069, ISO 14067, PAS 2050 o GHG Protocolo
            | , entre otras, que recogen este tipo de propuestas. 
        p La huella de carbono se mide en masa de CO2 equivalente. Según el tamaño de la huella, es posible implementar una estrategia de gestión de emisiones, a través de diferentes programas.
        p En Colombia está regulada la huella de carbono principalmente a través de la siguiente reglamentación, para conocerla revise el objeto digital de aprendizaje que a continuación se muestra.
      .col-lg-5(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema6-2-imagen1.png", alt="Regulaciones, entidades certificadoras y requerimientos para ingresar a los mercados internacionales")

    .row.justify-content-center.mb-5
      .col-lg-12
        .bg-greenCard
          .row.justify-content-center
            .col-lg-8

              ImagenInfografica.color-secundario.customInfo
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/t6-i1.svg', alt='Mapa de Colombia')

                .tarjeta.color-acento-botones.p-3(x="47%" y="37%")
                  .wrapbox
                    .h5.mb-2 La Resolución 1447 de 2018
                    p Por medio de la cual se establece el control, prevención y mitigación de la emisión de gases de invernadero.
                .tarjeta.color-acento-botones.p-3(x="40%" y="52%")
                  .wrapbox
                    .h5.mb-2 El CONPES 3700 de 2011
                    p Por el cual se establecen medidas para tratar con el cambio climático desde diferentes sectores.
                .tarjeta.color-acento-botones.p-3(x="56%" y="60%")
                  .wrapbox
                    .h5.mb-2 Ley 1753 de 2015
                    p Por la cual se establece la creación del registro de emisión de gases efecto invernadero.



    p.mb-4(data-aos="fade") A continuación, se va a tratar un tema clave para el sector avícola colombiano, ya que muestra el avance del mismo en términos de reglamentaciones o pautas que se han desarrollado. Para esto le invito a revisar el tema “Guía ambiental para el subsector avícola” de FENAVI por su cuenta, con el fin de reforzar su aprendizaje.

    .row.justify-content-center(data-aos="fade") 
      .col-lg-10
        .tarjeta.color-gradiente.py-lg-4.px-lg-5.p-3
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-2.px-lg-4
              img.px-lg-2(src="@/assets/curso/tema6-2-ico1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0.texto-blanco
                  h4.mb-1 Guía ambiental para el subsector avícola
                  p.mb-0.text-small Para profundizar en el aprendizaje puede revisar el siguiente documento “Guía ambiental para el subsector avícola” 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-negro(:href="('https://www.google.com/url?q=https://fenavi.org/wp-content/uploads/2018/05/GUIA_AMBIENTAL_SUBSECTOR_AVICOLA.pdf&sa=D&source=editors&ust=1626806256163000&usg=AOvVaw3ZB_R9nrKuIidejmje-UwM')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema6',
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
