//updates header to 'New Header !!!""
$(document).ready(function(){
    $('#update_header').click(function(){
        $('header').replaceWith('New Header!!!');
    });
});
