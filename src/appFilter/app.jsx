import React from 'react';
import ReactDOM from 'react-dom';
import load from './load';
import data from './data';

import '../css/style.styl';


const db = load('http://jsonplaceholder.typicode.com/posts?userId=3')
.then(data => {
  return data
})
console.log(db)
function UserItem(props) {
  return(
    <li>
      <h3>{props.user.name}</h3>
      <p>{props.user.email}</p>
    </li>
  )
}
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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: data,
      filteredUsers: null,
      query: '',
      orderBy: "Asc"
    }
  }
  sortUsers(e, order){
    const forSort = this.state.filteredUsers ? this.state.filteredUsers : this.state.users;
    forSort.sort((a, b) => {
      const check = a.name.toLowerCase() < b.name.toLowerCase();

      if(order == "Desc"){
        // if(a.name < b.name){
        //   return -1
        // }
        // if(a.name > b.name){
        //   return 1
        // }
        return check ? -1 : 1
      }else{
        // if(a.name > b.name){
        //   return -1
        // }
        // if(a.name < b.name){
        //   return 1
        // }
        return check ? 1 : -1
      }
      return 0
    })
    this.setState({
      orderBy: order,

    })
  }
  filterUsers(e){
    const filter = this.state.users.filter((item) => {
      const query = e.target.value.toLowerCase();
      return ~item.name.toLowerCase().indexOf(query) || ~item.email.toLowerCase().indexOf(query)
    })

    this.setState({
      query: e.target.value,
      filteredUsers: filter
    })
  }
  render(){
    const order = this.state.orderBy == "Asc" ? "Desc" : "Asc";
    return(
      <div>
        <input value={this.state.query} onChange={this.filterUsers.bind(this)} />
        <button onClick={(e) => this.sortUsers(e, order)}>Order By {order}</button>
        <UserList users={this.state.filteredUsers ? this.state.filteredUsers : this.state.users}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('mount-point'));