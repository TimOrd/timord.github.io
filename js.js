jQuery(function($){

$('button.btn-add').click(function(e){
	e.preventDefault();
	$('.name-boxes').append('<div class="form-inline"><input type="text" class="form-control name-input input-lg" placeholder="Name"> <span class="glyphicon glyphicon-remove"></span></div>');
});

$('button.btn-clear').click(function(e){
	e.preventDefault();
	$('input.name-input, input.name-input + span').remove();
	$('p.answer').empty().removeClass('bg-success bg-danger');
	$('.name-boxes').append('<div class="form-inline"><input type="text" class="form-control name-input input-lg" placeholder="Name"> <span class="glyphicon glyphicon-remove"></span></div>');
});	

$('span.glyphicon-remove').live('click', function(){
	$(this).prev('input').remove();
	$(this).remove();
});
  
  $('button.btn-tea').live('click', function(){

  var list = [];
  $("input.name-input").each(function(){
    list.push($(this).val());
  });
    
  var randomPicker = list[Math.floor(Math.random() * list.length)];
  var selected = randomPicker; 

if( selected !== '' ) {
    $('p').removeClass('bg-danger').addClass('bg-success').html('It\'s ' + selected + ', off you trot!');
} else {
	$('p').removeClass('bg-success').addClass('bg-danger').html("You didn't enter any names, you badass! <span class='glyphicon glyphicon-thumbs-down'></span>");
}

  });

});
