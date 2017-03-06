const user = {
	name: 'Sergey',
	lastname: 'Novodvorsky'
}

export default function(state=user, action){
	switch(action.type) {
		case 'CHANGE_NAME':
			return Object.assign({}, state, {name: action.payload})
			break;
		case 'CHANGE_LASTNAME':
			return Object.assign({}, state, {lastname: action.payload})
			break;
	}

	return state;

}