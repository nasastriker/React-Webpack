const root = 'http://jsonplaceholder.typicode.com';


jQuery.ajax({
	url: root + '/posts',
	method: 'GET',
	data: {userId: 3},
	beforeSend: function() {
		console.log('Strarting...');
	}
}).then(function(response) {
	
	var wrapper = jQuery('<div></div>', {
		class: 'wrapper',
		html: ''
	});

	response.map(function(item, index) {
		var item = jQuery('<div></div>', {
			class: "item",
			html: "<h3>" + item.title + "</h3>" + "<p>" + item.body + "</p>"
		});

		wrapper.append(item);
	});

	setTimeout(function() {jQuery('#content').html(wrapper);}, 1000);
	
}, function(err) {
	console.log(err);
});

