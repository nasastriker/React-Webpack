import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { userDetails } from '../actions/userActions';

class UserDetails extends React.Component {

	componentDidMount() {
		const user_id = this.props.match.params.user_id; 
		this.props.userDetails(user_id);
	}
	render() {
		const user_id = this.props.match.params.user_id; 
		return (
			<div>
				<div> User name: {this.props.user.name} </div>
				<div> User email: {this.props.user.email} </div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		user: state.user
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({userDetails: userDetails}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UserDetails);