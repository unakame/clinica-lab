/*
function Datos(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre= nombre;
  this.apellido= apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad= ciudad;
  this.pais=pais;
  this.mostrar= function(){
    document.write("Nombre: " + this.nombre+ " "+ this.apellido"<br>"+"Edad: "+this.edad+ "<br>"+"País: "+this.pais)
  }
}*//*
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var edad= document.getElementById("edad").value;
var ciudad= document.getElementById("ciudad").value;
var pais= document.getElementById("pais").value;
function Datos(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre= nombre;
  this.apellido= apellido;
  this.edad=edad;
  this.genero=genero;
  this.ciudad= ciudad;
  this.pais=pais;
  this.mostrar= function(){
    document.write("Nombre: " + this.nombre+ " "+ this.apellido"<br>"+"Edad: "+this.edad+ "<br>"+"País: "+this.pais)
  }
}*/

function formLoad(e){

  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad= document.getElementById("edad").value;
  var ciudad= document.getElementById("ciudad").value;
  var pais= document.getElementById("pais").value;

  document.getElementById("result").innerHTML= "Nombre: " +nombre+" "+"<br><br>"+"Edad: "+edad+"<br><br>"+"País: "+pais;
  document.getElementById("formu").onsubmit = function(e){
    e.preventDefault();
  }
}
