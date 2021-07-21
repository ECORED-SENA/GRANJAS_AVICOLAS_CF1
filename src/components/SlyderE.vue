<template lang="pug">
.slyder-d
  ScrollHorizontal(v-if="datos.length" :selectedId="selected" item-full-width)
    .slyder-d__slyde(
      v-for="(item,index) in datos" 
      :key="'key-'+getId(index)"
      :id="getId(index)"
    )
      .slyder-d__imagen.mb-4
        figure.slyder-d__img
          img(:src='item.imagen', :alt='item.leyendaImagen')

        .slyder-d__content
          .row
            .col-md-8.col-lg-5
              .slyder-d__content__card.bg-color.p-4
                h4 {{item.titulo}}
                p.mb-3(v-html="item.texto")
                .slyder__action
                  .slyder__pagination {{index+1}}/{{datos.length}}
                  a.slyder__btn(v-if="index -1 >= 0" @click="selected = getId(index -1)")
                    i.fas.fa-angle-left
                  a.slyder__btn(
                    v-if="index != datos.length -1"
                    @click="selected = getId(index +1)"
                    @mouseover="mostrarIndicador = false"
                  )
                    i.fas.fa-angle-right
                    .indicador__container(v-if="mostrarIndicador && index === 0")
                      .indicador--click.indicador--sm

</template>

<script>
import slyderMixins from '../../node_modules/ecored-base-pkg/src/mixins/slyderMixins'
import ScrollHorizontal from '../../node_modules/ecored-base-pkg/src/components/plantilla/ScrollHorizontal'
export default {
  name: 'SlyderE',
  components: { ScrollHorizontal },
  mixins: [slyderMixins],
  data: () => ({
    mostrarIndicador: true,
  }),
  mounted() {
    this.selected = this.getId(0)
  },
}
</script>

<style lang="sass">
.slyder-d__content__card.bg-color
  background-color: #f1f5ecd9
  border-top-left-radius: 8px
.slyder__btn
  background-color: #FB9E36
.slyder__btn:hover
  background-color: #BF7726

.slyder-d__content
  top: 0
  border-top-left-radius: 10px
</style>
