jQuery(function($){
  
  $('button').click(function(){
  var names = $('#textarea').val();
  var list = new Array();
  list = names.split(',');
    
  var randomPicker = list[Math.floor(Math.random() * list.length)];
  var selected = randomPicker; 

    $('p.bg-success').html(selected);
    
  });
});
