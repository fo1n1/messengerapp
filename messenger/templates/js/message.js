function messagePoll() {
	$.ajax({
		type: "GET",
		url: "/messages",
		dataType: "json",
		success: function (data) {
			updateMessages(data);
		},
		timeout: 500,
		complete: setTimeout(messagePoll, 1000),
	})
}

function updateMessages(messages) {
	var $messageContainer = $('#messageContainer');
	var messageList = [];
	var emptyMessages = '<p>No messages!</p>';
	if (messages.length === 0) {
		$messageContainer.html(emptyMessages);
	} else {
		$.each(messages, function (index, value) {
			var message = $(value.message).text() || value.message;
			messageList.push('<p>' + value.email + ': ' + message + '</p>');
		});
		$messageContainer.html(messageList);
	}
}