jQuery(function($) {
  
  var names = $('textarea').val();
  var list = new Array();
  list = names.split(',');
  
  

  $('button').click(function(){
    console.log(list);
  });
});
