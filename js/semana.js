$( document ).ready(function() {

  var ref = new Firebase("https://comidaplicacion.firebaseio.com/");
  ref.child("semana-receta").limitToLast(6).on("child_added", function(snapshot){

    var data = snapshot.val();

    var semana  = "<div class='cuadros'>" ;

    var ruta1 = "receta/"+data.llave+"/nombre";
    ref.child(ruta1).on("value", function(ingreNombre){
      var nombreReceta = ingreNombre.val();

    semana += "<h5 class='data-nombre'>" + nombreReceta + " </h5>";
    });

    moment.locale('es');
    var fecha = moment(data.fecha).format('dddd',"es");

    console.log(fecha);
    semana += "<p class='data-fecha'>"+ fecha +" </p>";
    semana += "<ul class='info-ingre'>";


    var ruta = "receta/"+data.llave+"/ingredientes";
    ref.child(ruta).on("value", function(ingreReceta){

    var ingredientesReceta = ingreReceta.val();

     _.each(ingredientesReceta,function(value,key,items){
         semana += "<li>" + key + " : " + value + "</li>";
      });

    $("#contenedor_semana").append(semana);

    }, function (errorObject) {
      console.log("The read failed: " + errorObject.code);

    });

    // semana += "</ul> </div>";

  });


});
