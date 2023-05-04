//JavaScript script that fetches the character name from this URL
let URL = 'https://swapi-api.alx-tools.com/api/people/5/?format=json';

$.get(URL);
    .done(function(){
        $('#character').replaceWith(data['name']);
    });
