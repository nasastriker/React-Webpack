import React from 'react';
import ReactDOM from 'react-dom';
import load from './load';
import UserData from './UserData';
import '../css/style.styl';



// load('http://jsonplaceholder.typicode.com/posts?userId=3')
//   .then(data => {
//     console.log(data)
//     const users = data.map((user, index) => {
//       return (<UserData user={user} index={index} update={update} />);
//     });
//   });


var FilteredList = React.createClass({
  filterList: function(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  },
  getInitialState: function(){
     return {
      initialItems: [
        load('http://jsonplaceholder.typicode.com/posts?userId=3')
          .then(data => {
            console.log(data)
            return data
            // const users = data.map((user, index) => {
            //   return (<UserData user={user} index={index} update={update} />);
            // });
          })
      ],
       // initialItems: [
       //   "Apples",
       //   "Broccoli",
       //   "Chicken",
       //   "Bacon",
       //   "Eggs",
       //   "Salmon",
       //   "Granola",
       //   "Bananas",
       //   "Beer",
       //   "Wine",
       //   "Yogurt"
       // ],
       items: []
     }
  },
  componentWillMount: function(){
    this.setState({items: this.state.initialItems})
  },
  render: function(){
    return (
      <div className="filter-list">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
    );
  }
});

var List = React.createClass({
  render: function(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
       }
      </ul>
    )  
  }
});

ReactDOM.render(<FilteredList/>, document.getElementById('mount-point'));

// function Hello(props){
//  return (
//    <div>
//      <h1>Hello {props.name} {props.lastName} {props.age}!</h1>
//      <p>Is a {props.gender ? "Girl" : "Boy"}</p>
//    </div>
//  )
// }

// class App extends React.Component{
//  constructor(props){
//    super(props);
//    this.state = {
//      user: "",
//      lastName: "",
//      age: "",
//      gender: false
//    };

//    this.changeUser = this.changeUser.bind(this);
//  }

//  changeUser(e){
//    const target = e.target;
//    const value = target.type === 'checkbox' ? target.checked : target.value;
//    const name = target.name;

//    console.log(value)
//    this.setState({
//      [name]: value
//    })
//  }

//  render(){
//    return (
//      <div>
//        <input value={this.state.user} name="user" onChange={this.changeUser}/>
//        <input value={this.state.lastName} name="lastName" onChange={this.changeUser}/>
//        <input value={this.state.age} name="age" onChange={this.changeUser}/>
//        <input type="checkbox" name="gender" checked={this.state.gender} onChange={this.changeUser}/>

//        <Hello 
//          name={this.state.user}
//          lastName={this.state.lastName}
//          age={this.state.age}
//          gender={this.state.gender}
//        />
//      </div>
//    )
//  }
// }
//ReactDOM.render(<App/>, document.getElementById('content'));