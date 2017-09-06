// $('#addItem').on('click', function() {
// 	console.log('add button clicked');
// });

// var deleteButton = "delete";

$('#addItem').click(function() {
	var g = $('#newInput').val();
	$('#mainList').append("<li>" + g + "<button>complete</button></li>");
	$("button").last().addClass("delete");
	$('#newInput').focus();
	}
);

// $('input').keypress(function(event) {
// 	if (event.which == 13) {
// 		event.preventDefault();
// 		$('form').submit();
// 	}
// });

$('#addItem').on('click', function() {
	$('#newInput').val('');
	$('input:text').removeAttr('checked');
	console.log('test');
});

$(document).on('click', '.delete',function () {
	$(this).parent().remove();
	$('#newInput').focus();
})
