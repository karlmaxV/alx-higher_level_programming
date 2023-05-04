//using JQuery api for the add_item effect
$(document).ready(function(){
    $('#add_item').click(function(){
        $('my_list').append('<li>Item</li>');
    });
});
