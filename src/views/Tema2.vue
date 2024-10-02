<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Conceptos generales para la prestación de un servicio gastronómico 
    
    .cont_2_1
      .row.p-relative
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/1.png")
        .col-lg-9(data-aos="fade-left")
          p Saber valorar y apreciar en toda su plenitud la comida, la bebida y el servicio que las acompaña convierte a una persona en un buen gastrónomo. 
          .row.mt-4
            .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
              figure.m-auto.col-9.col-md-8.col-lg-12 
                img(src="@/assets/curso/tema2/2.png")
            .col-lg-7.ps-lg-0(data-aos="fade-up")
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFE4D6;")
                p.mb-0 La gastronomía está estrechamente vinculada a todos los elementos que conforman la elaboración de alimentos y bebidas, así como al servicio que los ofrece a los clientes. No solo satisface las necesidades alimenticias, sino que también brinda una oportunidad de escape en una sociedad cada vez más estresante. El comensal puede disfrutar tanto de la calidad y presentación de la comida como de las características del entorno en el que la consume. 
          p.mt-4.mb-0 Algunas personas limitan la gastronomía al arte culinario, definiéndola como el arte de preparar una buena comida. Sin embargo, no se trata solo de cocinar, sino también de crear, conocer, experimentar y vincular diferentes aspectos relacionados con la cocina. 
      
      .cont_decorativo.mb-4.mt-5.p-relative(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Arte culinario
      
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema2/3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Es una forma creativa de preparar los alimentos, que depende en gran medida de la cultura y del conocimiento de los ingredientes, su preparación y los rituales sociales asociados a la comida. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Procedimiento en el servicio gastronómico 
    
    p(data-aos="fade-left") El servicio gastronómico consiste en un conjunto de actividades interrelacionadas que ofrece un prestador con el objetivo de que el cliente reciba el producto en el momento y lugar adecuados. Los procedimientos para la prestación de este servicio implican una serie de pasos indispensables para garantizar su éxito. 

    TabsC.color-acento-contenido.mt-4
      .py-3.py-md-4(titulo="Presentar la oferta de servicio al cliente")
        .row.p-4.ps-xl-5.pe-xl-5
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            h5 Presentar la oferta de servicio al cliente 
            p Es fundamental causar una buena impresión durante el primer contacto. Se presenta documentación atractiva que incluye detalles de los salones disponibles y sugerencias de menús. 
          .col-lg-5(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/4.png')
      .py-3.py-md-4(titulo="Elaborar la cotización ")
        .row.p-4.ps-xl-5.pe-xl-5
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            h5 Elaborar la cotización 
            p Se confirma con el cliente el servicio solicitado y se elabora un presupuesto detallado, incluyendo servicios, espacios, equipos, alimentos y bebidas, junto con la fecha y cantidad de personas. 
          .col-lg-5(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/5.png')
      .py-3.py-md-4(titulo="Concretar la negociación ")
        .row.p-4.ps-xl-5.pe-xl-5
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            h5 Concretar la negociación 
            p Tras la aceptación del cliente, se firma el contrato y se procede con la facturación correspondiente. 
          .col-lg-5(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/6.png')
      .py-3.py-md-4(titulo="Difundir información de los servicios ")
        .row.p-4.ps-xl-5.pe-xl-5
          .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
            h5 Difundir información de los servicios 
            p El director de servicios gastronómicos distribuye las instrucciones a los departamentos responsables: al Chef para la preparación de alimentos, al Jefe de mesa para la atención y al Coordinador de logística para el transporte y montaje. 
          .col-lg-5(style="place-self:center;")
            figure.m-auto.col-8.col-md-7.col-lg-12
              img(src='@/assets/curso/tema2/7.png')
    
    p.mt-4(data-aos="fade-up") Este proceso asegura que todos los aspectos del servicio gastronómico se planifiquen y ejecuten de manera organizada y eficiente, ofreciendo una experiencia satisfactoria al cliente. 

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_1 2.1  Evolución en la prestación de un servicio gastronómico 
    
    .row(data-aos="fade-up")
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/8.svg")
      .col(style="place-self:center;")
        p.mb-0 Aunque muchas empresas prestadoras de servicios gastronómicos buscan regresar a ofertas y servicios tradicionales, otras están enfocadas en el desarrollo continuo de su servicio, tecnología y oferta, en línea con el avance de la sociedad moderna. 
    
    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/9.png")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="La gastronomía por el gusto personal ")
            .col-lg-7.mb-4.mb-lg-0
              p En el pasado, los menús se elegían en función de los gustos personales, sin relación directa con la actividad o el motivo del evento. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/10.png")
          .row.col-xl-11.m-auto(titulo="La gastronomía del evento ")
            .col-lg-7.mb-4.mb-lg-0
              p La cocina empezó a alinearse con el concepto del evento, seleccionando ingredientes y preparaciones que reflejaran la esencia y objetivos del encuentro, incluyendo la forma de presentación de los platos.
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/11.png")
          .row.col-xl-11.m-auto(titulo="La gastronomía del cliente ")
            .col-lg-7.mb-4.mb-lg-0
              p El enfoque cambió a satisfacer las necesidades y deseos del cliente. El servicio gastronómico se centró en lo que el cliente quería comunicar, ofreciendo un servicio más creativo y sofisticado para reflejar mejor los deseos del cliente. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/12.png")

    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_2 2.2  Tendencias en la prestación de un servicio gastronómico 
    
    .row
      .col-lg-9(data-aos="fade-up")
        p A lo largo de la historia, las empresas dedicadas a la gastronomía han tenido que adaptarse a las demandas cambiantes, buscando el estilo que les permita alcanzar el éxito. 
        .row.mt-4
          .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
            figure.m-auto.col-9.col-md-8.col-lg-12 
              img(src="@/assets/curso/tema2/13.png")
          .col-lg-7.ps-lg-0(data-aos="fade-up")
            .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFE4D6;")
              p.mb-0 Las nuevas tecnologías, la industrialización y la optimización del tiempo de elaboración y presentación de los productos han influido en la creación de nuevas tendencias en el servicio gastronómico, dirigidas a mejorar procesos y sorprender continuamente al cliente. 
        p.mt-4.mb-0 #[strong Uso de herramientas tecnológicas:] Internet ha facilitado la toma rápida de decisiones, evitando errores, reduciendo el tiempo y minimizando fallos. Esta tendencia incluye la sustitución del mesero por tecnología, lo que agiliza el servicio y reduce errores, aunque no tiene el mismo impacto en la interacción personal que influye en las decisiones de los comensales, como elegir un platillo o recomendar el lugar. 
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/14.png")
    
    .row.mt-4
      .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/15.svg")
      .col-lg-9(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Sustitución de ingredientes ")
            .col-lg-7.mb-4.mb-lg-0
              p En los platillos tradicionales se reemplazan algunos ingredientes por frutas y hortalizas, buscando opciones más saludables o innovadoras. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/16.png")
          .row.col-xl-11.m-auto(titulo="Uso de flores comestibles")
            .col-lg-7.mb-4.mb-lg-0
              p Las flores comestibles se están incorporando cada vez más en la presentación y elaboración de platos sofisticados, agregando color y sabor únicos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/17.png")
          .row.col-xl-11.m-auto(titulo="Gastronomía molecular ")
            .col-lg-7.mb-4.mb-lg-0
              p Una tendencia que utiliza principios científicos para innovar en la preparación y presentación de alimentos, creando nuevas texturas y experiencias culinarias. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/18.png")
          .row.col-xl-11.m-auto(titulo="Nuevas técnicas de cocción")
            .col-lg-7.mb-4.mb-lg-0
              p Se introducen técnicas como el uso del wok, que permiten la creación de platos más saludables y exóticos, manteniendo los sabores frescos y los nutrientes de los ingredientes. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/19.png")
          .row.col-xl-11.m-auto(titulo="Movimiento <em>slow food</em>")
            .col-lg-7.mb-4.mb-lg-0
              p Este movimiento surge en respuesta al fast food, destacando la importancia de los platos tradicionales, preparados con dedicación y tiempo, para apreciar mejor los sabores auténticos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-7.col-lg-12
                img(src="@/assets/curso/tema2/20.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Gastronomía molecular 
    
    .p-4(style="background-color:#FFE4D6;")
      .row
        .col-lg-7.mb-4.mb-lg-0(data-aos="fade-right")
          p.mb-0 La gastronomía molecular destaca por la singularidad en la preparación de los platos, ya que se aplican principios de física y química en su elaboración. De este modo, la ciencia se vincula a la cocina, transformando al chef en un verdadero científico e investigador, capaz de innovar a través de técnicas y experimentos culinarios. 
        .col-lg-5(data-aos="fade-left")
          figure.m-auto.col-8.col-md-7.col-lg-12
            img(src="@/assets/curso/tema2/21.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Cocina #[em Wok]
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5(data-aos="flip-up")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/22.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La cocina wok utiliza un sartén ligero, redondo y profundo que facilita métodos de cocción rápidos y con menos aceite. Este tipo de sartén es ideal para preparar salteados de verduras y hortalizas, como berenjenas, espárragos, cebolla y pimientos rojos, manteniendo sus propiedades nutritivas y sabores. 
    
    p.mt-4(data-aos="fade-right") Las tendencias arquitectónicas son: 

    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Propuesta integral 
              p El diseño del local debe satisfacer simultáneamente las necesidades operativas, de servicio y de marketing, optimizando la funcionalidad y la experiencia del cliente.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/23.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Segmentación de espacios 
              p  Se crean diferentes ambientes en un mismo salón mediante el uso de diversos climas temáticos, mobiliario y luces, ofreciendo experiencias variadas dentro de un solo establecimiento. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/24.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Gastronomía y entretenimiento 
              p  La tendencia mixta combina arte y servicio gastronómico, brindando al cliente una experiencia culinaria acompañada de eventos culturales y artísticos. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/25.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Minimalismo 
              p  Busca la simplicidad en la decoración utilizando colores armónicos y evitando sobrecargar el ambiente, proporcionando una estancia cómoda y agradable para el comensal. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/26.png')
    
    .col-xl-10.m-auto.mt-4
      .p-4(style="background-color:#9EC9FF;border-radius:10px;")
        .row(data-aos="fade-up")
          .col-auto.d-none.d-md-block(style="place-self:center;")
            figure
              img(src="@/assets/curso/tema2/27.svg")
          .col(style="place-self:center;")
            p.mb-0 Además, algunos espacios están ambientados con un estilo hogareño y familiar, con mesas cuidadosamente dispuestas. La inclusión del “#[em show] culinario” permite que los clientes puedan observar en todo momento el proceso de elaboración de los platos que van a consumir, añadiendo un elemento de transparencia y entretenimiento al servicio.
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_3 2.3  Máquinas y herramientas
    
    .row(data-aos="fade-up")
      .col-auto.d-none.d-md-block(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema2/28.svg")
      .col(style="place-self:center;")
        p.mb-0 Al planificar la cocina de su negocio, es esencial tener una visión clara del tipo de comida que desea preparar y, más importante aún, cómo hacerlo. El enfoque en el menú le sugerirá qué equipos necesita, y la decisión sobre los mismos determinará los procesos y la calidad de su producto. 
    
    .cont_1_1.mt-4.pt-4.pb-4.pb-xl-5.pt-xl-5
      .tarjeta.bg-white.p-4.p-lg-5.pb-lg-4
        SlyderA(tipo="b")
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Funcionalidad 
              p   Determinar si el equipo cumple con las expectativas, mantiene la temperatura adecuada, es fácil de ajustar, y cómo responde a los cambios de temperatura. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/29.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Flexibilidad 
              p   Evaluar cuántos productos diferentes se pueden preparar con el equipo, considerando las necesidades variables del menú. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/30.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Espacio 
              p Verificar si las dimensiones del equipo se ajustan a las instalaciones, considerando puertas, pasillos y otras barreras físicas en el local.    
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/31.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Capacidad 
              p Adquirir equipos considerando la producción total durante las horas pico, con un margen adicional de 20% o 25% de capacidad.   
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/32.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Fuente de energía 
              p   Considerar si el equipo funcionará mejor con electricidad o gas, dependiendo del tipo de equipo (parrillas, estufas, freidoras, equipos de bebidas, etc.). 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/33.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Eficiencia energética 
              p Buscar equipos con funciones de ahorro de energía, como “#[em stand-by]” o “#[em power-saver mode],” para reducir el consumo de energía cuando no están en uso.   
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/34.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Mantenimiento 
              p   Consultar la frecuencia de mantenimiento, disponibilidad de repuestos y puntos de servicio postventa. 
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/35.png')
          .row.pt-lg-4
            .col-lg-7.mb-4.mb-lg-0(style="place-self:center;")
              h4 Facilidad de limpieza 
              p Evaluar los materiales del equipo (acero inoxidable, plástico, metal cromado) y la facilidad para desarmar y limpiar las piezas, solicitando una demostración de limpieza al proveedor.  
            .col-lg-5
              figure.m-auto.col-8.col-md-6.col-lg-12
                img(src='@/assets/curso/tema2/36.png')
    
    Separador

    .titulo-segundo(data-aos="flip-up")
      h2#t_2_4 2.4  Higiene y manipulación de alimentos
    
    .cont_2_2
      .row
        .col-lg-9(data-aos="fade-up")
          p A lo largo de la historia, las empresas dedicadas a la gastronomía han tenido que adaptarse a las demandas cambiantes, buscando el estilo que les permita alcanzar el éxito. 
          .row.mt-4
            .col-lg-5.mb-4.mb-lg-0.pe-lg-0(data-aos="fade-down")
              figure.m-auto.col-9.col-md-8.col-lg-12 
                img(src="@/assets/curso/tema2/37.png")
            .col-lg-7.ps-lg-0(data-aos="fade-up")
              .h-100.p-4.d-flex.align-content-center.flex-wrap(style="background-color:#FFE4D6;")
                p.mb-0 Los consumidores exigen cada vez más altos estándares de calidad en los productos que adquieren. La inocuidad de los alimentos es un aspecto fundamental de la calidad, por lo que existen normativas nacionales que los productores de alimentos deben cumplir para ser competitivos. 
          p.mt-4.mb-0 El Decreto 3075 de 1997 del Ministerio de Protección Social establece un conjunto de Buenas Prácticas de Manufactura (BPM) que todas las industrias del sector alimentario deben seguir. 
        .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
          figure
            img(src="@/assets/curso/tema2/38.png")
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Buenas Prácticas de Manufactura (BPM) 
      
      p(data-aos="fade-left") Las BPM abarcan aspectos como instalaciones, equipos, personal manipulador y documentación, entre otros. Todas las fábricas y establecimientos que procesan alimentos deben cumplir con estas prácticas. Su implementación permite: 

    .row.mt-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")
        figure 
          img(src="@/assets/curso/tema2/39.png")
      .col-lg-8(data-aos="zoom-in")
        AcordionA(tipo="a" clase-tarjeta="tarjeta")
          .row.col-xl-11.m-auto(titulo="Reducir el riesgo de contaminación ")
            p.mb-0 Minimizar el riesgo de contaminación de los alimentos consumidos por los seres humanos, asegurando la seguridad alimentaria. 
          .row.col-xl-11.m-auto(titulo="Crear conciencia en los empleados ")
            p.mb-0 Fomentar la importancia de seguir procesos seguros en la producción de alimentos para garantizar productos saludables. 
          .row.col-xl-11.m-auto(titulo="Generar confianza en los clientes ")
            p.mb-0 Incrementar la confianza de los clientes en la calidad y seguridad de los productos producidos conforme a las normas sanitarias. 
          .row.col-xl-11.m-auto(titulo="Fomentar la cultura de documentación ")
            p.mb-0 Establecer la práctica de llevar registros y documentación en la empresa, facilitando la toma de decisiones informadas. 
          .row.col-xl-11.m-auto(titulo="Reducir costos de fabricación ")
            p.mb-0 Optimizar los procesos productivos, lo que conduce a una reducción de los costos de fabricación. 
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Calidad de las materias primas 
    
    p(data-aos="fade-left") La calidad de las materias primas no debe comprometer el cumplimiento de las BPM. 

    .row.mt-4
      .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.cont_2_3.text-center.pt-xl-5.pb-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema2/40.svg")
          p.mb-0 La adecuada selección de materias primas garantiza productos de calidad.
      .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.cont_2_3.text-center.pt-xl-5.pb-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema2/41.svg")
          p.mb-0 Las materias primas deben almacenarse en condiciones apropiadas que las protejan de contaminantes.
      .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.cont_2_3.text-center.pt-xl-5.pb-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema2/42.svg")
          p.mb-0 El área de almacenamiento debe estar separada de los productos terminados para evitar la contaminación cruzada. Además, se deben considerar las condiciones óptimas de almacenamiento, como temperatura, humedad, ventilación e iluminación.
      .col-lg-3.mb-4.mb-lg-0.col-md-6(data-aos="zoom-in")
        .h-100.p-4.cont_2_3.text-center.pt-xl-5.pb-xl-5
          figure.mb-2
            img(src="@/assets/curso/tema2/43.svg")
          p.mb-0 El transporte debe cumplir con los mismos principios higiénico-sanitarios que se aplican en los establecimientos.
  
    p.mt-lg-4(data-aos="fade-right") Los requisitos higiénicos de fabricación son: 

    .p-4(style="background-color:#FFC8AC;")
      .row
        .col-lg-7(data-aos="fade-up")
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Evitar la contaminación proveniente de materias primas y productos vencidos.
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Lavar con agua potable y desinfectar las materias primas cuando sea necesario.
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Mantener las condiciones de conservación indicadas por el fabricante y separar productos crudos de los terminados.
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Almacenar los envases utilizados de manera que no se conviertan en fuente de contaminación.
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Realizar las operaciones de producción en óptimas condiciones sanitarias, conservando la calidad de las materias primas, productos en proceso y productos terminados. Es importante mantener los controles necesarios para reducir el crecimiento de microorganismos y prevenir la contaminación.
          .bg-white.p-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Prevenir la contaminación cruzada durante la fabricación, procesamiento, envasado y almacenamiento.
        .col-lg-5.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/44.png")

    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Higiene de los alimentos, las personas y la cocina
    
    p(data-aos="fade-left") La higiene no se refiere solo a la limpieza del establecimiento o de las personas que lo habitan. Los alimentos que se producen también deben ser higiénicos y seguros.
    p(data-aos="fade-up") Los principales focos de contaminación: 

    .row.mt-4.justify-content-center
      .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.cont_2_4.text-center.pt-xl-5.pb-xl-5
          figure.mb-3
            img(src="@/assets/curso/tema2/45.svg")
          span.ps-4.pe-4.p-1.h5 Humanos
          p.mb-0.mt-3 Tos, estornudos, manos mal lavadas, gripe, heridas abiertas, ropa contaminada, entre otros.
      .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.cont_2_4.text-center.pt-xl-5.pb-xl-5
          figure.mb-3
            img(src="@/assets/curso/tema2/46.svg")
          span.ps-4.pe-4.p-1.h5 Animales
          p.mb-0.mt-3  Roedores, moscas, perros, gatos, aves, entre otros.
      .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
        .h-100.p-4.cont_2_4.text-center.pt-xl-5.pb-xl-5
          figure.mb-3
            img(src="@/assets/curso/tema2/47.svg")
          span.ps-4.pe-4.p-1.h5 Otros
          p.mb-0.mt-3  Equipos, cubiertos, manteles, servilletas y vajillas mal lavadas.
      .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src="@/assets/curso/tema2/48.svg")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Cómo prevenir la contaminación
    
    .cont_2_5
      .row.mt-4.justify-content-center
        .col-lg-3.d-none.d-lg-block(data-aos="fade-right")
          figure
            img(src="@/assets/curso/tema2/50.svg")
        .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.p-4.cont_2_6.text-center
            figure.mb-3
              img(src="@/assets/curso/tema2/51.svg")
            span.ps-4.pe-4.p-1.h5 Humanos
            p.mb-0.mt-3 Lavarse las manos con frecuencia, manipular los alimentos lo menos posible, usar uniformes limpios, emplear papel en lugar de trapos y no manipular alimentos estando enfermo o con heridas. 
        .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.p-4.cont_2_6.text-center
            figure.mb-3
              img(src="@/assets/curso/tema2/52.svg")
            span.ps-4.pe-4.p-1.h5 Alimentos
            p.mb-0.mt-3 Almacenar los productos refrigerados adecuadamente, protegerlos de animales como ratas y moscas, cocinar los alimentos correctamente y consumirlos el mismo día de su preparación. 
        .col-lg-3.mb-4.mb-lg-0.col-md-8(data-aos="zoom-in")
          .h-100.p-4.cont_2_6.text-center
            figure.mb-3
              img(src="@/assets/curso/tema2/53.svg")
            span.ps-4.pe-4.p-1.h5 Ambientales
            p.mb-0.mt-3 Mantener las áreas de trabajo bien ventiladas, disponer de medios de limpieza continua y contar con equipos de almacenamiento en frío adecuados. 
    
      .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
        .row
          .col-auto.pe-0.ps-lg-3(style="place-self:start;")
            figure
              img(src="@/assets/curso/tema1/12.svg")
          .col.ps-2(style="place-self:center;")
            h3.mb-0.pe-4.pt-lg-3 Higiene en la cocina
      
      p(data-aos="fade-left") La higiene en la cocina es fundamental. Un ambiente sucio o contaminado puede generar la proliferación de gérmenes y enfermedades.
      p(data-aos="fade-up") Los problemas que ocasiona un manejo inadecuado de la higiene en la cocina:

    .p-4.mt-4(style="background-color:#FFE4D6;")
      .row
        .col-lg-7(data-aos="fade-up")
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Afecta a las personas que trabajan en ella, ya que deben laborar en un ambiente desagradable y poco saludable.
          .bg-white.p-3.mb-2.mb-xl-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Perjudica al propietario, ya que las ventas disminuirán si los clientes se enteran de que no es un lugar adecuado para consumir alimentos. Además, pueden enfrentarse a grandes sumas en honorarios legales, multas, mala publicidad y la pérdida de clientela.
          .bg-white.p-3(style="border-radius:5px;")
            .d-flex
              i.fas.fa-check-circle.mt-1(style="color:#FF7630;")
              span.ps-2 Pone en riesgo la salud de los clientes, quienes pueden enfermar debido a alimentos mal procesados.
        .col-lg-5.d-none.d-lg-block(data-aos="fade-left" style="place-self:center;")
          figure
            img(src="@/assets/curso/tema2/54.png")
    
    .cont_decorativo.mb-4.mt-5(data-aos="fade-right")
      .row
        .col-auto.pe-0.ps-lg-3(style="place-self:start;")
          figure
            img(src="@/assets/curso/tema1/12.svg")
        .col.ps-2(style="place-self:center;")
          h3.mb-0.pe-4.pt-lg-3 Higiene del personal
    
    p(data-aos="fade-left") El personal que prepara y sirve los alimentos debe mantenerse completamente limpio, lo cual solo es posible si se les proporciona los medios necesarios.

    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones.p-4(titulo="Lavado de manos" style="background-color:#EBF4FF;")
        h5 Lavado de manos
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Lavarse con frecuencia, especialmente después de usar el baño, al comenzar a trabajar o durante la manipulación de alimentos. Utilizar jabón hasta el antebrazo con agua tibia o caliente.
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/55.png")
      .tarjeta.color-acento-botones.p-4(titulo="Uso de anillos y joyas" style="background-color:#EBF4FF;")
        h5 Uso de anillos y joyas
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Está prohibido el uso de anillos y joyas en la cocina, ya que transportan microorganismos y dificultan la manipulación correcta de alimentos y utensilios. Las uñas deben estar limpias, cortas y sin esmalte. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/56.png")
      .tarjeta.color-acento-botones.p-4(titulo="Cuidado del cabello" style="background-color:#EBF4FF;")
        h5 Cuidado del cabello
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Lavarse con frecuencia, mantenerlo corto y recogido. Es obligatorio usar gorros en la cocina para evitar la caída de cabello en los alimentos. Evitar tocarse la nariz o la boca mientras se manipulan alimentos. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/57.png")
      .tarjeta.color-acento-botones.p-4(titulo="Calzado" style="background-color:#EBF4FF;")
        h5 Calzado
        .row
          .col-lg-7.mb-4.mb-lg-0
            p El calzado debe ser cómodo, fuerte y capaz de proteger de golpes y derrames, dado que el personal de cocina pasa largas jornadas de pie. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/58.png")
      .tarjeta.color-acento-botones.p-4(titulo="Ropa de cocina" style="background-color:#EBF4FF;")
        h5 Ropa de cocina
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Se recomienda usar ropa blanca, ya que la suciedad se detecta más fácilmente. La ropa sucia transporta gérmenes que pueden contaminar los alimentos. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/59.png")
      .tarjeta.color-acento-botones.p-4(titulo="Uniformes" style="background-color:#EBF4FF;")
        h5 Uniformes
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Los uniformes deben ser ligeros, confortables, resistentes y absorbentes, debido a la alta transpiración en este tipo de trabajos. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/60.png")
      .tarjeta.color-acento-botones.p-4(titulo="Cosméticos" style="background-color:#EBF4FF;")
        h5 Cosméticos
        .row
          .col-lg-7.mb-4.mb-lg-0
            p Está prohibido el uso de cosméticos en la cocina, ya que pueden transmitir olores y sabores indeseables a los alimentos. 
          .col-lg-5
            figure.m-auto.col-9.col-md-7.col-lg-12
              img(src="@/assets/curso/tema2/61.png")






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

<style lang="sass"></style>
