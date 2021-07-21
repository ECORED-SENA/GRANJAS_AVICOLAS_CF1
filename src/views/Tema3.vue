<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Normatividad ambiental 

    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-tema3.jpg", alt="Normatividad ambiental")  

    p.mb-5(data-aos="fade") De acuerdo a los requerimientos presentados en el sector avícola a nivel internacional y nacional, se ha venido reglamentando la normatividad ambiental, la cual se adapta continuamente a las necesidades de la producción, el crecimiento de la industria y los impactos ambientales de la misma; por eso es que esta es una herramienta que le permite a los avicultores mejorar sus procesos productivos teniendo en cuenta las producciones limpias y sostenibles, al tener que usar la legislación vigente.

    .row.justify-content-center
      .col-lg-9
        .bloque-texto-a.color-primario2.p-4.p-md-4.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p De acuerdo a FENAVI (2018), la gestión ambiental dentro de la producción avícola tiene como objeto: prevenir, minimizar y controlar los impactos derivados de sus actividades, tales como: hacer un uso adecuado y control en la contaminación del agua, el suelo y el aire, además se debe tener en cuenta la clasificación y el manejo adecuado de residuos y las mortalidades, entre otros.
            .col-lg-4
              img(src="@/assets/curso/tema3-imagen.svg", alt="Normatividad ambiental")  

    p.mb-4(data-aos="fade") Es relevante recalcar que, la ejecución del programa de gestión ambiental se debe acompañar de otras actividades como la generación de competencias para el cumplimiento de la normatividad vigente y la capacitación continua de todo el personal en el área ambiental. Además, se debe hacer seguimiento al desarrollo y ejecución del componente ambiental, cuidando de que se cumplan sus metas y objetivos. 

    p.mb-5(data-aos="fade") A continuación, encontrará una tabla donde se sintetiza la información sobre normatividad relacionada con el sector avícola en Colombia.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade")
          p.mb-0 
            strong Tabla 1. 
            | Sector avícola en Colombia, reglamentación 
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.nombre.h5 Nombre
                th.tema.h5 Tema
                th.h5 Enlace
            tbody
              tr
                td
                  strong Política Nacional de Producción y Consumo Sostenible, 2010
                td En este documento se actualizan e integran la Política Nacional de Producción más Limpia y el Plan Nacional de Mercados Verdes como estrategias del Estado colombiano que promueven y enlazan el mejoramiento ambiental y la transformación productiva a la competitividad empresarial.
                td 
                  a.pdf-tabla(:href="('https://www.minambiente.gov.co/images/AsuntosambientalesySectorialyUrbana/pdf/Programa_y_consumo_sostenible/polit_nal_produccion_consumo_sostenible.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Política Nacional para la Gestión Integral Ambiental del Suelo (GIAS), 2013
                td Se presenta la Política Nacional para la Gestión Integral Ambiental del Suelo (GIAS) con el fin de aportar a la conservación y uso sostenible de este componente determinante de los ciclos del agua, del aire y de los nutrientes e indispensable para la preservación de la biodiversidad y sus servicios ecosistémicos.
                td
                  a.pdf-tabla(:href="obtenerLink('/downloads/DI_CF1_Anexo1_Politica-de-gestion-integral-del-suelo_minam.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Política Nacional para la Gestión Integral del Recurso Hídrico, 2010
                td El presente documento contiene la Política Nacional para la Gestión Integral del Recurso Hídrico (PNGIRH) que establece los objetivos, estrategias, metas, indicadores y líneas de acción estratégica para el manejo del recurso hídrico en el país en un horizonte de 12 años.
                td
                  a.pdf-tabla(:href="('https://www.minambiente.gov.co/images/GestionIntegraldelRecursoHidrico/pdf/Presentaci%C3%B3n_Pol%C3%ADtica_Nacional_-_Gesti%C3%B3n_/libro_pol_nal_rec_hidrico.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Política Ambiental para la Gestión Integral de Residuos o Desechos Peligrosos, 2005
                td Esta busca el uso y manejo adecuado de los residuos peligrosos, los cuales son considerados como fuentes de riesgo para el medio ambiente y la salud. 
                td
                  a.pdf-tabla(:href="('http://www.ideam.gov.co/documents/51310/526371/POLITICA+AMBIENTAL+PARA+LA+GESTION+INTEGRAL+DE+RESPEL.pdf/fb42059d-77ec-423b-8306-960dee6bb9c6')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Resolución 668 de 2016 
                td Por la cual se reglamenta el uso racional de bolsas plásticas y se adoptan otras disposiciones. 
                td 
                  a.pdf-tabla(:href="('https://www.minambiente.gov.co/images/57-Resolucion_No._0668-2016.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")    
              tr
                td
                  strong Ley 1333 de 2009 
                td Por la cual se establece el procedimiento sancionatorio ambiental y se dictan otras disposiciones. 
                td 
                  a.pdf-tabla(:href="('https://www.minambiente.gov.co/images/BosquesBiodiversidadyServiciosEcosistemicos/pdf/Regimen-Sancionatorio-Ambiental/ley_1333_210709.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Resolución 2087 de 2014 
                td Por la cual se adopta el Protocolo para el monitoreo, control y vigilancia de olores ofensivos. 
                td
                  a.pdf-tabla(:href="('https://fenavi.org/wp-content/uploads/2018/05/Resoluci%C3%B3n-2087-de-2014-Protocolo-Monitoreo-control-y-Vigilancia-de-Olores-Ofensivos-1.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Resolución 1207 de 2014 
                td Por la cual se adoptan disposiciones relacionadas con el uso de aguas residuales tratadas. 
                td
                  a.pdf-tabla(:href="('https://fenavi.org/wp-content/uploads/2018/05/Resoluci%C3%B3n_1207_2014-Reuso-aguas-tratadas-1.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Ley 1672 de 2013 
                td Por la cual se establecen los lineamientos para la adopción de una política pública de gestión integral de residuos de aparatos eléctricos y electrónicos (RAEE), y se dictan otras disposiciones. 
                td 
                  a.pdf-tabla(:href="('https://fenavi.org/wp-content/uploads/2018/05/ley_1672_2013-1.pdf')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Resolución ICA 3650 de 2014 
                td Por medio de la cual se establecen los requisitos para el registro como productor de material genético aviar y expedición de licencias de venta de material genético aviar. 
                td
                  a.pdf-tabla(:href="('https://www.ica.gov.co/getattachment/3c2f3642-85a5-4622-91b5-5a31597c2cb4/2014R3-(1).aspx')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")                                
              tr
                td
                  strong Resolución ICA 3652 de 2014 
                td Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de engorde y se dictan otras disposiciones. 
                td 
                  a.pdf-tabla(:href="('https://www.ica.gov.co/getattachment/124802ad-c49c-470d-809e-a9ce5ad3db76/2014R3652.aspx')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")
              tr
                td
                  strong Resolución ICA 3651 de 2014 
                td Por medio de la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras de postura y/o levante y se dictan otras disposiciones. 
                td
                  a.pdf-tabla(:href="('https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx#:~:text=Que%20el%20Instituto%20Colombiano%20Agropecuario,importancia%20econ%C3%B3mica%20a%20nivel%20nacional.')" target="_blank")
                    img(src="@/assets/template/icono-pdf.svg")            


</template>

<script>
export default {
  name: 'Tema3',
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
