  $(document).ready(function(){

$('#contenedor_recetas').on('click','.agregar_receta',function(e){
  var idReceta = $(this).parent()[0].id;
  var lafecha = $(this).parent()[0].childNodes[1].value;
  // var dataReceta = $(this).parent()[0].childNodes[0].innerHTML;
  // var agregar = $(this).parent()[0].childNodes[4].innerHTML;
  // var ingrediente = $(this).parent()[0].childNodes[3].innerHTML;
  // var personas = $(this).parent()[0].childNodes[5].innerHTML;
  var ref = new Firebase("https://comidaplicacion.firebaseio.com/semana-receta");
  var semana ={
    llave : idReceta,
    fecha : lafecha,
    // tituloReceta : dataReceta,
    // datosReceta : agregar,
    // ingredientes : ingrediente
    // platos : personas
  };
  console.log(semana);
  ref.push(semana);
  // alert("se envio la receta");

  });
});
