//using JQuery api for the toggle effect
$(document).ready(function(){
    $(#toggle_header).click(function(){
        if($('header').hasClass('green')){
            $('header').addClass('red');
            $('header').removeClass('green');
        }else{
            $('header').removeClass('red');
            $('header').addClass('green');
        }
    });
});
