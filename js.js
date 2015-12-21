jQuery(function($) {
  
  var names = $('textarea').val();
  var list = array();
  list = names.split(',');
  
  

  $('button').click(function(){
    alert(list);
  });
});
