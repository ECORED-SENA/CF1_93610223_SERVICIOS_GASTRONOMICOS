<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-down") A continuación, se presenta una síntesis de la temática estudiada en el componente formativo. 

    .row.justify-content-center.p-4(style="background-color:#FFF9F1;border-radius:20px;")
      .col-lg-10.mb-5
        figure(data-aos="zoom-in-up")
          img(src="@/assets/curso/sintesis.svg", alt="Higiene y manipulación de alimentos en el servicio gastronómico. La síntesis a abarca aspectos claves como las normativas que regulan la higiene y manipulación de alimentos, incluyendo el Decreto 3075 de 1997 y las Buenas Prácticas de Manufactura (BPM). Se mencionan las prácticas de reducción de riesgos, selección y almacenamiento adecuado de materias primas, prevención de contaminación cruzada, y requisitos higiénicos de fabricación. Además, se destacan los focos de contaminación y la higiene personal, con medidas como el lavado frecuente de manos, uso de gorros, ropa adecuada y prohibición de joyas y cosméticos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
