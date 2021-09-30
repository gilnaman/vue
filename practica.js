new Vue({
   //Especificar la zona de actuacion de Vue
  el:"#miPagina",

  // Esta seccion de VUE sirve para declarar Variables
  // Y constantes.
  data:{
  	mensaje:'HOLA MUNDO CRUEL again',
  	alumno:'',
   nombre:'',
   especie:'',
  	edad:0,
   mascotas:[{nombre:'Goldi',especie:'Canina',edad:9},
             {nombre:'Zuma',especie:'Felina',edad:4},
             {nombre:'Toño',especie:'Canina',edad:5}
            ],

   especies:[
               {clave:1,nombre:'Canina'},
               {clave:2,nombre:'Felina'},
               {clave:3,nombre:'Ave'}
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

   agregarMascota:function(){
      // Construimos un objeto de tipo mascota para insertar en el array
      var unaMascota={nombre:this.nombre,especie:this.especie,edad:this.edad};

      // Agrego un objeto mascota
      this.mascotas.push(unaMascota);
      this.limpiarHtml();
   },

   limpiarHtml:function(){
     this.nombre='';
     this.especie='';
     this.edad=''; 
   },
   


  }
  // FIN DE METHODS

});