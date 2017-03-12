import React from 'react';

import UserItem from './userItem.jsx';

class UserList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		return(
			<div>
				<ul>
					{this.props.users.map((user, index) => <UserItem key={index} user={user} />)}
				</ul>
			</div>
		)
	}
}

export default UserList