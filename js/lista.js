

$( document ).ready(function() {


  var ref = new Firebase("https://comidaplicacion.firebaseio.com/");
  ref.child("semana-receta").limitToLast(6).on("child_added", function(snapshot){

    var data = snapshot.val();

    var semana  = "<div class='cuadros'>" ;



    var ruta = "receta/"+data.llave+"/ingredientes";
    ref.child(ruta).on("value", function(ingreReceta){

    var ingredientesReceta = ingreReceta.val();

    _.union(ingredientesReceta);

     _.each(ingredientesReceta,function(value,key,items){
         semana += "<li id='casillas'>" + key + " : " + value + "</li>" +  '<input type= "checkbox"/>' ;
      });

      console.log(ingredientesReceta);


    $("#contenedor_semana").append(semana);


    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

  });

});
