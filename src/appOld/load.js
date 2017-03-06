//const url = 'http://jsonplaceholder.typicode.com/posts';

// jQuery.ajax({
// 	url: root + '/posts',
// 	method: 'GET',
// 	data: {userId: 3},
// 	beforeSend: function() {
// 		console.log('Strarting...');
// 	}
// }).then(function(response) {
	
// 	var wrapper = jQuery('<div></div>', {
// 		class: 'wrapper',
// 		html: ''
// 	});

// 	response.map(function(item, index) {
// 		var item = jQuery('<div></div>', {
// 			class: "item",
// 			html: "<h3>" + item.title + "</h3>" + "<p>" + item.body + "</p>"
// 		});

// 		wrapper.append(item);
// 	});

// 	setTimeout(function() {jQuery('#content').html(wrapper);}, 1000);
	
// }, function(err) {
// 	console.log(err);
// });

export default url => {
  return new Promise((success, fail) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.addEventListener('load', () => {
      request.status >= 200 && request.status < 400
        ? success(request.responseText)
        : fail(new Error(`Request Failed: ${request.statusText}`));
    });

    request.addEventListener('error', () => {
      fail(new Error('Network Error'));
    });

    request.send();
  });
};
