<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Higiene y manipulación de alimentos en el servicio gastronómico ',
      titulo: 'Cuestionario',
      introduccion:
        'Evaluar las Buenas Prácticas de Manufactura (BPM), los procedimientos higiénicos en la manipulación de alimentos, y las normativas aplicables en la industria gastronómica para asegurar la inocuidad y calidad en la producción de alimentos. ',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué norma establece las Buenas Prácticas de Manufactura (BPM) en la industria alimentaria en Colombia? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Decreto 4567 de 1998. ', esCorrecta: false },
            { id: 'b', texto: 'Decreto 3075 de 1997. ', esCorrecta: true },
            { id: 'c', texto: 'Ley 142 de 2000. ', esCorrecta: false },
            { id: 'd', texto: 'Resolución 1122 de 2003. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál de las siguientes opciones es un beneficio de implementar las Buenas Prácticas de Manufactura (BPM)? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumenta el precio de los productos. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción del riesgo de contaminación de alimentos. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se evita el uso de tecnología. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumenta el tiempo de producción. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué se debe hacer para prevenir la contaminación cruzada durante la fabricación de alimentos? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezclar productos crudos y terminados. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Separar productos crudos de los productos terminados. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Almacenar todos los alimentos juntos. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Utilizar cualquier tipo de envase disponible. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento es obligatorio para el personal que trabaja en la cocina? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Uso de anillos. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Uso de gorros para evitar la caída del cabello. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Uso de joyas y relojes. ', esCorrecta: false },
            { id: 'd', texto: 'Uñas largas y pintadas. ', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una de las principales causas de contaminación en la manipulación de alimentos? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso de materiales de acero inoxidable. ',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Manos mal lavadas. ', esCorrecta: true },
            { id: 'c', texto: 'Almacenamiento adecuado. ', esCorrecta: false },
            {
              id: 'd',
              texto: 'Cocción a temperatura alta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Cuál es el material recomendado para uniformes de cocina? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Lana. ', esCorrecta: false },
            {
              id: 'b',
              texto: 'Material ligero, confortable y absorbente. ',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Seda.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Material impermeable y no absorbente. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué se recomienda para evitar la contaminación de las materias primas durante el almacenamiento? ',
          imagen: require('@/assets/actividad/pregunta_3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Guardar las materias primas con los productos terminados. ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar las materias primas en condiciones adecuadas. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Dejar las materias primas al aire libre. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Colocar las materias primas junto a los productos perecederos. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué debe hacerse antes de manipular alimentos en la cocina? ',
          imagen: require('@/assets/actividad/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lavarse las manos con agua y jabón. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tocar otros alimentos sin lavar. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar perfume para desinfectarse. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Solo lavarse las manos si están sucias. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál es un ejemplo de equipo de cocina eficiente en el uso de energía? ',
          imagen: require('@/assets/actividad/pregunta_1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Equipo sin modo "<em>stand-by</em>". ',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Equipo con modo "<em>power-saver</em>". ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Equipo que siempre funciona al máximo. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Equipo sin opciones de ahorro de energía. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué debe evitarse en la vestimenta del personal de cocina? ',
          imagen: require('@/assets/actividad/pregunta_2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ropa sucia que transporte gérmenes. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ropa blanca que detecte fácilmente la suciedad. ',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ropa ligera y confortable. ',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ropa absorbente que ayude con la transpiración. ',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
