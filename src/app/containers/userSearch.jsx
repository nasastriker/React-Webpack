import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { filterUsers, sortUsers } from '../actions/userActions';
import UserList from '../components/userList.jsx';

class UserSearch extends React.Component {
	render(){
		const order = this.props.userSearch.orderBy == "Asc" ? "Desc" : "Asc";
		const users = this.props.users;
		const filteredUsers = this.props.userSearch.filteredUsers;
		return(
			<div>
				<input value={this.props.userSearch.query} onChange={(e) => this.props.filterUsers(e, users)} />
				<button onClick={() => this.props.sortUsers(order, users, filteredUsers)}>Order By {order}</button>
				<UserList users={filteredUsers ? filteredUsers : this.props.users}/>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		users: state.users,
		userSearch: state.userSearch
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
			filterUsers: filterUsers,
			sortUsers: sortUsers
		}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserSearch)