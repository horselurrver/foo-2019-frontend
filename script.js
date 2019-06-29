$(document).ready(function() {
    console.log( "ready!" );
    $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/butterfree',
      type: 'GET',
      data: {},
      dataType: 'text',
      success: function(data) {
        console.log('Data: ' + data);
      },
      error: function(request, error) {
        alert('Request: ' + JSON.stringify(request));
      }
    });
});
