
$(document).ready(function(){
  var ref = new Firebase("https://comidaplicacion.firebaseio.com/receta");
  var ingre = {};
  console.log(ingre);


  $("#enviar").click(function(){



    var receta = {
      nombre :  $("#nombre_receta").val(),
      tiempopreparacion : $("#tiempo_preparacion").val(),
      porciones: $("#cantidad_personas").val(),
      ingredientes : crearIngredientes(),
      preparacion : $("#elaboracion").val(),
    };
    ref.push(receta);

    $("#campos").click(function(){
      $('#cero').reset();
});
  });

  function crearIngredientes() {

    $(".ingredientes").each(function(index){
      x = $(this);


      var producto = x[0].children[0].value;
      var cantidad = x[0].children[1].value;
      ingre[producto] = cantidad;
      $("ingredientes").push(ingre);
    });
    return ingre;
    }
      });

// fiuncionalidad para crear inputs dinamicamente
      var nextinput = 0;
      function AgregarCampos(){
        nextinput++;
        campo ='<div class="col s8 m4 offset-s1 offset-m4 ingredientes"><input type="text" class="ingreProducto" placeholder="ingresa ingredientes"><input type="number" id="cantidad" class="ingreCantidad" placeholder="cantidad"></div>';
        $("#campos").append(campo);
      }

  // funcionalidad para refrescar pantalla luego de ingresar data
          $("#enviar").click(function(){
            location.reload();
          });
