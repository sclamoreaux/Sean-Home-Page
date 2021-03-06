$(function() {
	// Get the form.
	var form = $('#ajax-contact');

	// Set up an event listener for the contact form.
	$(document).on('submit', form, function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Get the messages div.
		var formMessages = $('#form-messages');

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			formMessages.removeClass('error');
			formMessages.addClass('success');

			// Set the message text.
			formMessages.text(response);

			console.log(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			formMessages.removeClass('success');
			formMessages.addClass('error');

			console.log(data);

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
