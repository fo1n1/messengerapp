$("#postMessage").submit(function (event) {
	event.preventDefault();

	var $form = $(this),
	message = $form.find("input[name='message']").val(),
	url = $form.attr("action");
	$.ajax({
		type: 'POST',
		url: url,
		data: JSON.stringify({
			message: message
		}),
		contentType: "application/json",
		dataType: 'json',
		success: function () {
			location.reload();
		}

	});
});