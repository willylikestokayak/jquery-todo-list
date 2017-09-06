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

$('#newInput').keypress(function(event) {
	if (event.keyCode == 13) {
		$('#addItem').click();
	}
});

$('#addItem').on('click', function() {
	$('#newInput').val('');
	$('input:text').removeAttr('checked');
	console.log('test');
});

$(document).on('click', '.delete',function () {
	$(this).parent().remove();
	$('#newInput').focus();
})
