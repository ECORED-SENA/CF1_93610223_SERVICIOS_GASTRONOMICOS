(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"08be":function(e,a,t){"use strict";t("504a")},"27ba":function(e,a,t){},"2f9e":function(e,a,t){},"3bee":function(e,a,t){"use strict";t("2f9e")},"41a8":function(e,a,t){e.exports=t.p+"img/pregunta_4.8af4793b.png"},4298:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e._self._c;return a("div",{staticClass:"curso-main-container pb-3"},[a("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),a("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[a("div",{attrs:{id:"Actividad"}},[a("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta--blanca"},[a("div",{staticClass:"row align-items-center mb-4"},[e._m(0),a("div",{staticClass:"col"},[a("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.cuestionario.introduccion)}})])]),a("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?a("ActividadResultados",{attrs:{respuestas:e.respuestas}}):a("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),a("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,a=e._self._c;return a("div",{staticClass:"col-auto"},[a("img",{attrs:{src:t("8da0"),alt:""}})])}],n=(t("14d9"),function(){var e=this,a=e._self._c;return a("div",[a("p",{staticClass:"mb-4 pb-4",domProps:{innerHTML:e._s(e.pregunta.texto)}}),a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col-5"},[a("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),a("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(t,s){return a("div",{key:t.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":t.correcta,"tarjeta-respuesta--incorrecta":t.incorrecta,"tarjeta-respuesta--disabled":t.disabled},on:{click:function(a){return e.onRespuestaSelected(t)}}},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-auto"},[a("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===t.id?t.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),a("div",{staticClass:"col",domProps:{innerHTML:e._s(t.texto)}})])])})),0)]),e.respuestaSelected.id?[a("hr"),e.respuestaSelected.esCorrecta?a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):a("div",{staticClass:"pt-2"},[a("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(a=>({...a,correcta:e===a.id&&a.esCorrecta,incorrecta:e===a.id&&!a.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(t("3bee"),t("2877")),p=Object(l["a"])(u,n,c,!1,null,"0d0c9f9a",null),m=p.exports,b=function(){var e=this,a=e._self._c;return a("div",{staticClass:"tarjeta-avance"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"d-none d-md-block col"},[a("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[a("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),a("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),a("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?a("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(a){return e.$emit("reiniciar")}}},[a("span",[e._v("Reiniciar")])]):a("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(a){return e.$emit("continuar")}}},[a("span",[e._v("Continuar")]),a("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},v=C,x=(t("c2dc"),Object(l["a"])(v,b,g,!1,null,"7a0121ad",null)),h=x.exports,_=function(){var e=this,a=e._self._c;return a("div",{staticClass:"row align-items-center justify-content-around"},[a("div",{staticClass:"col-5"},[(e.aprobado,a("img",{attrs:{src:t("a46c"),alt:""}}))]),a("div",{staticClass:"col-4"},[a("div",{staticClass:"d-flex align-items-center flex-column"},[a("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[a("h3",[e._v("¡BUEN TRABAJO!")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[a("h3",[e._v("VUELVE A INTENTARLO")]),a("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],a("hr",{staticClass:"w-100"}),a("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},f=[],j={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(a=>{a.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},y=j,A=(t("4d40"),Object(l["a"])(y,_,f,!1,null,"360ec089",null)),R=A.exports,S={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:h,ActividadResultados:R},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:a}=this.cuestionario;if(!e)return[];const t=a?this.shuffle(e):e;return t.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let a,t=e.length;while(t>0)a=Math.floor(Math.random()*t),t--,[e[t],e[a]]=[e[a],e[t]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},M=S,L=(t("08be"),Object(l["a"])(M,o,i,!1,null,"1f7092aa",null)),q=L.exports,w={name:"ActividadDidactica",components:{Actividad:q},data:()=>({cuestionario:{tema:"Higiene y manipulación de alimentos en el servicio gastronómico ",titulo:"Cuestionario",introduccion:"Evaluar las Buenas Prácticas de Manufactura (BPM), los procedimientos higiénicos en la manipulación de alimentos, y las normativas aplicables en la industria gastronómica para asegurar la inocuidad y calidad en la producción de alimentos. ",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Qué norma establece las Buenas Prácticas de Manufactura (BPM) en la industria alimentaria en Colombia? ",imagen:t("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Decreto 4567 de 1998. ",esCorrecta:!1},{id:"b",texto:"Decreto 3075 de 1997. ",esCorrecta:!0},{id:"c",texto:"Ley 142 de 2000. ",esCorrecta:!1},{id:"d",texto:"Resolución 1122 de 2003. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Cuál de las siguientes opciones es un beneficio de implementar las Buenas Prácticas de Manufactura (BPM)? ",imagen:t("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Aumenta el precio de los productos. ",esCorrecta:!1},{id:"b",texto:"Reducción del riesgo de contaminación de alimentos. ",esCorrecta:!0},{id:"c",texto:"Se evita el uso de tecnología. ",esCorrecta:!1},{id:"d",texto:"Aumenta el tiempo de producción. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué se debe hacer para prevenir la contaminación cruzada durante la fabricación de alimentos? ",imagen:t("5173"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Mezclar productos crudos y terminados. ",esCorrecta:!1},{id:"b",texto:"Separar productos crudos de los productos terminados. ",esCorrecta:!0},{id:"c",texto:"Almacenar todos los alimentos juntos. ",esCorrecta:!1},{id:"d",texto:"Utilizar cualquier tipo de envase disponible. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué elemento es obligatorio para el personal que trabaja en la cocina? ",imagen:t("41a8"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Uso de anillos. ",esCorrecta:!1},{id:"b",texto:"Uso de gorros para evitar la caída del cabello. ",esCorrecta:!0},{id:"c",texto:"Uso de joyas y relojes. ",esCorrecta:!1},{id:"d",texto:"Uñas largas y pintadas. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Cuál es una de las principales causas de contaminación en la manipulación de alimentos? ",imagen:t("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Uso de materiales de acero inoxidable. ",esCorrecta:!1},{id:"b",texto:"Manos mal lavadas. ",esCorrecta:!0},{id:"c",texto:"Almacenamiento adecuado. ",esCorrecta:!1},{id:"d",texto:"Cocción a temperatura alta.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál es el material recomendado para uniformes de cocina? ",imagen:t("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Lana. ",esCorrecta:!1},{id:"b",texto:"Material ligero, confortable y absorbente. ",esCorrecta:!0},{id:"c",texto:"Seda.",esCorrecta:!1},{id:"d",texto:"Material impermeable y no absorbente. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué se recomienda para evitar la contaminación de las materias primas durante el almacenamiento? ",imagen:t("5173"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Guardar las materias primas con los productos terminados. ",esCorrecta:!1},{id:"b",texto:"Almacenar las materias primas en condiciones adecuadas. ",esCorrecta:!0},{id:"c",texto:"Dejar las materias primas al aire libre. ",esCorrecta:!1},{id:"d",texto:"Colocar las materias primas junto a los productos perecederos. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué debe hacerse antes de manipular alimentos en la cocina? ",imagen:t("41a8"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Lavarse las manos con agua y jabón. ",esCorrecta:!0},{id:"b",texto:"Tocar otros alimentos sin lavar. ",esCorrecta:!1},{id:"c",texto:"Usar perfume para desinfectarse. ",esCorrecta:!1},{id:"d",texto:"Solo lavarse las manos si están sucias. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Cuál es un ejemplo de equipo de cocina eficiente en el uso de energía? ",imagen:t("4b5d"),barajarRespuestas:!0,opciones:[{id:"a",texto:'Equipo sin modo "<em>stand-by</em>". ',esCorrecta:!1},{id:"b",texto:'Equipo con modo "<em>power-saver</em>". ',esCorrecta:!0},{id:"c",texto:"Equipo que siempre funciona al máximo. ",esCorrecta:!1},{id:"d",texto:"Equipo sin opciones de ahorro de energía. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué debe evitarse en la vestimenta del personal de cocina? ",imagen:t("9738"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Ropa sucia que transporte gérmenes. ",esCorrecta:!0},{id:"b",texto:"Ropa blanca que detecte fácilmente la suciedad. ",esCorrecta:!1},{id:"c",texto:"Ropa ligera y confortable. ",esCorrecta:!1},{id:"d",texto:"Ropa absorbente que ayude con la transpiración. ",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},H=w,P=Object(l["a"])(H,s,r,!1,null,null,null);a["default"]=P.exports},"4b5d":function(e,a,t){e.exports=t.p+"img/pregunta_1.bdc6756f.png"},"4d40":function(e,a,t){"use strict";t("27ba")},"504a":function(e,a,t){},5173:function(e,a,t){e.exports=t.p+"img/pregunta_3.78cb55f4.png"},"8da0":function(e,a,t){e.exports=t.p+"img/icon-actividad.3d896e1e.svg"},9738:function(e,a,t){e.exports=t.p+"img/pregunta_2.cd002010.png"},a46c:function(e,a,t){e.exports=t.p+"img/cuestionario-resultado.a5584db8.svg"},c2dc:function(e,a,t){"use strict";t("f4e0")},f4e0:function(e,a,t){}}]);
//# sourceMappingURL=actividad.f27d7fb0.js.map