const user = {
	name: '',
	email: ''
}
export default function(state=user, action) {
	switch(action.type) {
		case 'SHOW_DETAILS':
			return Object.assign({}, state, action.payload);
			break;
	}

	return state;
}