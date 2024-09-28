<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos generales

    .row(data-aos="fade-up")
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.svg")
      .col(style="place-self:center;")
        p.mb-0 Para la preparación de diversos platos, manteniendo el concepto gastronómico, es necesario conocer conceptos y procedimientos básicos que permitan una mayor comprensión y apropiación en su implementación en las cocinas. A continuación, se analizarán las técnicas y procesos más comunes que deben realizarse en la preparación de cualquier alimento:  
    
    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Temperatura
              p Medida del calor o frío de un objeto o sustancia, que indica la cantidad de energía térmica contenida. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/3.png')



      
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

<style lang="sass"></style>
