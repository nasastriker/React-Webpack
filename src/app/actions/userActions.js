import data from '../data';

export const sortUsers = (order, users, filteredUsers) => {
	const forSort = filteredUsers ? filteredUsers : users;
	forSort.sort((a, b) => {
		const check = a.name.toLowerCase() < b.name.toLowerCase();

		if(order == "Desc"){
			return check ? -1 : 1
		}else{
			return check ? 1 : -1
		}
		return 0
	})
	return {
		type: 'SORT_USERS',
		payload: {
			orderBy: order
		}
	}
};

export const filterUsers = (e, users) => {
	const filter = users.filter((item) => {
		const query = e.target.value.toLowerCase();
		return ~item.name.toLowerCase().indexOf(query) || ~item.email.toLowerCase().indexOf(query)
	})

	return {
		type: 'FILTER_USERS',
		payload: {
			filteredUsers: filter,
			query: e.target.value
		}
	}
}

export const userDetails = (user_id) => {
    const single = data.filter((item) => item.id == user_id);
    return {
        type: 'SHOW_DETAILS',
        payload: {
            name: single[0]['name'],
            email: single[0]['email']
        }
    };
};

export const changeUser = (user) => {
	return {
		type: 'CHANGE_NAME',
		payload: user
	}
};

