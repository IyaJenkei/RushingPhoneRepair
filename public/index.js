var state = {
	register: {
		name: "",
		email: "",
		password: "",
		phone: ""
	},
	login: {
		email: "",
		password: ""
	},
	service: {
		date: "",
		model: "",
		screenColor: "",
		service: "",
		comment: "",
	}
}


function callajax(url, type, data1) {
	const settings = {
		url: url,
		data: JSON.stringify(data1),
		dataType: 'json',
		type: type,
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
		}
	};
	$.ajax(url, settings);
}

$(document).ready(function () {
	var now = new Date();
	if ((now.getMonth() + 1) < 10) {
		var today = now.getFullYear() + '-' + 0 + (now.getMonth() + 1) + '-' + now.getDate();
	}
	else {
		today = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
	}
	$('#date-picker').val(today);
});

$('#loginbutton').click(function (event) {
	state.login.email = $('#exampleInputEmail1').val();
	state.login.email = $('#exampleInputPassword1').val();
	callajax('/api/login', 'POST', state.login);
});

$('#register').click(function (event) {
	state.register.name = $('#exampleInputName1').val();
	state.register.email = $('#exampleInputEmail2').val();
	state.register.password = $('#exampleInputPassword2').val();
	state.register.phone = $('#exampleInputPhone').val();
	callajax('/api/signup', 'POST', state.register);
});

$('#service-submit').click(function (event) {
	state.service.date = $('#date-picker').val()
	state.service.model = $('#phone-model').val()
	state.service.screenColor = $('#screen-color').val()
	state.service.service = $('#service-type').val()
	state.service.comment = $('#comment-block').val()
	console.log(state);
	callajax('/api/service', 'POST', state.service);
});