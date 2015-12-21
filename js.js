jQuery(function($){
  
  $('button').click(function(){
  var names = $('#textarea').val();
  var list = new Array();
  list = names.split(',');
    
  var randomPicker = list[Math.floor(Math.random() * list.length)];
  var selected = randomPicker; 
  
    //alert( selected );
    
    $('p.bg-success').html(selected);
    
  });
});
