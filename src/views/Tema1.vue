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
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Cocción
              p Operación culinaria que usa calor para hacer un alimento más sabroso, apetecible y fácil de conservar. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/4.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Gusto
              p Se refiere al sabor y está relacionado con la percepción de placer al consumir un alimento. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/5.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Textura
              p Propiedades visuales y táctiles de una superficie, así como las sensaciones que produce. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/6.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Higiene
              p Conjunto de conocimientos y técnicas para controlar los factores que afectan la salud; implica limpieza y cuidado del cuerpo. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema1/7.png')
    
    p.mt-4(data-aos="fade-right") Otros conceptos importantes son:  

    .row
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema1/8.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Procesos")
            p Conjunto de acciones dirigidas hacia un fin; son cambios que ocurren de manera continua y definida. 
          .row.col-xl-11.m-auto(titulo="Fritura")
            p Cocción de un alimento mediante inmersión rápida en grasa caliente, resultando en un alimento seco, crujiente y dorado cuando se hace correctamente. 
          .row.col-xl-11.m-auto(titulo="Salteado")
            p Método de cocción en el que los alimentos se cocinan rápidamente con poca grasa y a fuego alto en una sartén. 
          .row.col-xl-11.m-auto(titulo="Insumo")
            p Ingredientes, envases o empaques de alimentos. 
    
    .row.mt-4
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Ingredientes primarios ")
            p Elementos constitutivos de un alimento; al cambiar uno de ellos, el producto se convierte en otro. 
          .row.col-xl-11.m-auto(titulo="Ingredientes secundarios ")
            p Componentes que, si son sustituidos, alteran las características del producto, aunque sigue siendo el mismo. 
          .row.col-xl-11.m-auto(titulo="Alimento perecedero ")
            p Alimento que puede experimentar alteraciones en un tiempo corto y requiere condiciones especiales de procesamiento, conservación, transporte y expendio. 
          .row.col-xl-11.m-auto(titulo="Alimento no perecedero ")
            p Alimento que también puede sufrir alteraciones, pero en un periodo más prolongado; necesita condiciones específicas de conservación y transporte. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure 
          img(src="@/assets/curso/tema1/9.png")
    
    .row.mt-5
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure
          img(src="@/assets/curso/tema1/10.png")
      .col-lg-9(data-aos="dade-up")
        p Un restaurante es un establecimiento comercial donde se paga por la comida y bebida para ser consumidas en el mismo local o para llevar. Hoy en día, existe una gran variedad de modalidades de servicio y tipos de cocina. 
        .row.mt-4
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/tema1/11.png")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFE4D6;")
              p.mb-0 Una cafetería, cafetín o simplemente café es un lugar donde se expenden café y otras bebidas, y a veces se sirven aperitivos y comidas. Este tipo de establecimiento comparte características tanto con un bar como con un restaurante. 
        p.mt-4 Los restaurantes empresariales han innovado el antiguo concepto de comedores industriales. 
    
    .cont_1_2.pt-4
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Definición de servicio gastronómico 
      
      .row
        .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right") 
          p Un servicio gastronómico es aquel en el que se tiene en cuenta cada aspecto relacionado con el área de la alimentación, desde la higiene de los productos o materias primas, equipos, herramientas y el espacio en el que se llevan a cabo los procesos de elaboración de alimentos, hasta el área de servicio. 
        .col-lg-8
          .row
            .col-lg-6.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
              figure.m-auto.col-9.col-md-8.col-lg-12 
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-6.ps-lg-0(data-aos="fade-up")
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#9EC9FF;")
                figure.mb-3
                  img(src="@/assets/curso/tema1/14.svg" style="max-width:70px;")
                p.mb-0 Otro aspecto relevante es el personal, que debe estar capacitado para brindar el servicio requerido por el cliente, tanto desde la cocina como en la interacción directa con los comensales. 
      
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Historia de la gastronomía 
      
      p(data-aos="fade-left") Exploremos la historia de la gastronomía, comenzando con el origen de la cocina, vinculada a la evolución del ser humano en su proceso de civilización. 

      figure.mt-4(data-aos="zoom-in-up")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

            



      
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
