<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5(data-aos="fade")
      img(src="@/assets/curso/banner-intro.jpg", alt="Introducción")  

    p(data-aos="fade") En avicultura el plan ambiental hace parte fundamental de la producción, ya que tiene una influencia directa en este; de la misma forma puede observarse cómo: la sanitización de las camas, el tratamiento del agua, el manejo de residuos y la mortalidad impactan la calidad del aire. 
    p(data-aos="fade") De igual manera, se puede identificar cómo productos de desecho y otros factores ambientales pueden afectar directa e indirectamente la rentabilidad y productividad de los galpones. Lo anterior, está correlacionado con la parte sanitaria y las buenas prácticas del sector para garantizar la bioseguridad y las producciones limpias.


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
