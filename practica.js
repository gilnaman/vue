new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
  	mensaje:'HOLA MUNDO CRUEL',
  	alumno:'',
  	edad:0,
   mascotas:[{nombre:'Goldi',especie:'Canina',edad:9},
             {nombre:'Zuma',especie:'Felina',edad:4},
             {nombre:'Toño',especie:'Canina',edad:5}
            ],

  },

  // Este objeto permite crear funciones y/o procedimeintos 
  methods:{


   aumentarEdad:function(){
      this.edad=Number(this.edad)+1;
   },

   disminuirEdad:function(){
      this.edad=Number(this.edad)-1;
   },

   


  }
  // FIN DE METHODS

});