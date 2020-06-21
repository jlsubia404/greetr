var g = G$('Jorge', 'Subia');
g.greet().greet(true);


$('#login').on('click', function(){
    $('#logindiv').hide();
    // use our chainable methods
    G$('Jorge', 'Subia').setLang($('#lang').val()).HTMLGreeting('#greeting', true).log();
})