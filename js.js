jQuery(function($) {

  var names = $('#textarea').val();
  var list = new Array();
  list = names.split(' ');
  
//  var randomPicker = names[Math.floor(Math.random() * names.length)];
  
//  var selected = randomPicker[0];
  
  

  $('button').click(function(){
    alert(list);
  });
});
