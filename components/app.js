import React, { Component } from 'react';
// import './App.css';
// import List from '../components/list';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: []
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
    console.log(this.state.term);
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    console.log(this.state.items, this.state);
  }

  render() {
    console.log( this.state.items, this.state);
    return (
      <div>
          Enter your list below
          <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>
   <section>
   {this.state.items}
   <ul>
    {
      this.state.items.map((item, index) => <li key={index}>{item} <button>Remove</button><button>Edit</button></li>)
    }
  </ul>
   </section>
  
      </div>
    );
  }
}


