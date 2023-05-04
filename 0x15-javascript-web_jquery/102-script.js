$(document).ready(function() {
  $('#btn_search').click(function () {
    let location = $('#city_search').val();
    let url = 'https://query.yahooapis.com/v1/public/yql?'
      + 'q=select%20wind%20from%20weather.forecast%20where%20woeid%20in%20'
      + '(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
      + location
      + '%22)&format=json';
    $.get(url)
      .done(function (data) {
	$('#wind_speed').text(data['query']['results']['channel']['wind']['speed']);
      });
  });
});
