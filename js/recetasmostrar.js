

    var ref = new Firebase("https://comidaplicacion.firebaseio.com/receta");
    ref.on("child_added", function(snapshot){

    var receta = document.createElement("article");
    receta.setAttribute("id",snapshot.key());

    var data = snapshot.val();
    receta.innerHTML = HTMLreceta(data);
    document.getElementById("contenedor_recetas").appendChild(receta);
    });

    // ref.on("child_changed", function(snapshot){
    //   var el = document.getElementById(snapshot.key());
    //   el.innerHTML = HTMLreceta(snapshot.val());
    // });

    function HTMLreceta(data){
      var contenido = "<h2 class='titulo_receta'>" + data.nombre + "</h2>";
      contenido += "<input class='calendario' type='date'></input>";
      contenido += "<a class='agregar_receta'>"+ 'agregar' +"</a>";
      contenido += "<p> Ingredientes </p>";
      contenido += "<ul class='ingredientes'>"+ datosIngrediente(data.ingredientes) +"</ul>";
      contenido += "<p class='datos_receta'>("+ data.tiempopreparacion + ' min.' + ")";
      contenido += "<p class='personas'>"+ data.porciones + "</p>";

      function datosIngrediente(datos){
        var datosingre ="";
        _.each(datos,function(value,key,items){
          datosingre += "<li>" + key + " : " + value + "</li>";
        });
        return datosingre;
      }

      return contenido;

  }
