
var myDataRef = new Firebase('https://comidaplicacion.firebaseio.com/');
      $('#inpus').keypress(function (e) {
        if (e.keyCode == 13) {
          var nombre = $('#nombre').val();
          var password = $('#password').val();
          myDataRef.push({nombre: nombre, password: password});
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
      });
      function displayChatMessage(nombre, password) {
        $('<div/>').text(text).prepend($('<em/>').text(nombre+': ')).appendTo($('#inpus'));
        $('#password')[0].scrollTop = $('#password')[0].scrollHeight;
      }
