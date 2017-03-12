import React from 'react';
import { Link } from 'react-router-dom';

function UserItem(props) {
	return(
		<li>
			<Link to={`/user/${props.user.id}`}>
				<h3>{props.user.name}</h3>
				<p>{props.user.email}</p>
			</Link>
		</li>
	)
}

export default UserItem