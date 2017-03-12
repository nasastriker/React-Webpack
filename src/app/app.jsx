import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import store from './store';
import UserSearch from './containers/userSearch.jsx';
import UserDetails from './containers/userDetails.jsx';

function custom(props){
	return(
		<div>Hello!</div>
	)
}
class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/custom">Custom Page</Link></li>
					</ul>

					<Route exact path="/" component={UserSearch}/>
					<Route exact path="/user/:user_id" component={UserDetails}/>
					<Route path="/custom" component={custom}/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('content')
)
