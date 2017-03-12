const userSearch = {
	filteredUsers: null,
	query: '',
	orderBy: "Asc"
}

export default function(state=userSearch, action){
	switch(action.type){
		case 'FILTER_USERS':
			return Object.assign({}, state, action.payload)
			break;
		case 'SORT_USERS':
			return Object.assign({}, state, action.payload)
			break;
	}
	return state;
}