function getAllPokemon() {
  let result = [];
  $.ajax({
    url: 'http://pokeapi.co/api/v2/pokemon/?limit=900',
    type: 'GET',
    data: {},
    async: false,
    dataType: 'json',
    success: function(data) {
      let pokeArray = data["results"];
      result = pokeArray;
    },
    error: function(request, error) {
      alert('Request: ' + JSON.stringify(request));
    }
  });
  return result;
}

$(document).ready(function() {
    console.log( "ready!" );

    $('#searchbar').keyup(function() {
      console.log($('#searchbar').val());
    });

    const allPokemon = getAllPokemon();
    console.log(allPokemon);
});
