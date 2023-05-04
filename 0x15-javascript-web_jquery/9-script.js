$(document).ready(function () {
        const greet = 'https://fourtonfish.com/hellosalut/?lang=fr';
        const $helloElement = $('div#hello');
      
        function getGreet () {
          return $.get({
            url: greet,
            dataType: 'json'
          });
        }
      
        getGreet().then((res) => {
          $helloElement.text(res.hello);
        });
      });
