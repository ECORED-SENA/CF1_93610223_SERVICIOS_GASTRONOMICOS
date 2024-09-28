<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row
      .col-lg
        .row
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/intro1.svg")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFEACB;")
              p.mb-0 El servicio gastronómico abarca una amplia gama de elementos, desde la preparación de alimentos hasta su presentación y consumo, asegurando siempre altos estándares de higiene y calidad. La atención al detalle y el uso adecuado de herramientas y técnicas culinarias son esenciales para ofrecer una experiencia satisfactoria al cliente. 
        .row.mt-4(data-aos="fade-in")
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/intro3.svg")
          .col(style="place-self:center;")
            p.mb-0 A lo largo de la historia, la gastronomía ha evolucionado, adaptándose a las demandas y preferencias de los consumidores. Innovaciones como la gastronomía molecular y el movimiento slow food reflejan un cambio hacia la utilización de ingredientes más saludables y la creación de experiencias culinarias únicas que conectan al comensal con la comida y el ambiente. 
      .col-lg-auto.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/intro2.png")
    
    .cont_intro.mt-4
      .col-xl-10.m-auto
        .p-4(style="background-color:#D8E9FF;border-radius:16px;" data-aos="zoom-in")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src="@/assets/curso/intro5.png")
            .col-lg
              p.mb-0(style="color:#FF7630;font-size:35px;") #[i.fas.fa-angle-right] #[i.fas.fa-angle-right] #[i.fas.fa-angle-right] #[i.fas.fa-angle-right]
              p.mb-0 Hoy en día, los avances tecnológicos han transformado el sector gastronómico, permitiendo mejorar los procesos, reducir errores y optimizar tiempos. Los restaurantes buscan equilibrar calidad, rapidez y personalización, con el objetivo de superar las expectativas del cliente y ofrecer un servicio memorable. 


    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
