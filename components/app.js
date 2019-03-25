import React, { Component } from 'react';
// import './App.css';
import List from '../components/list';
// import Service from '../components/service'


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
    // console.log(this.state.term);
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.setState({
      term: '',
      items: [...this.state.items, this.state.term]
    });
    // console.log(this.state.items, this.state);
  }

  onRemove = (event) => {
    console.log(this.state.items)
      // console.log(event)
      let temp =this.state.items.filter(
        (item,index,array) => array.splice(index,1)
        )

      console.log(temp)

    this.setState({
      items: temp
    }
      )

  }


  onDelete = (index) => {
    let listArr = this.state.items;
    listArr.splice(index, 1);
    this.setState({items: listArr})
   
    console.log(this.state.items)
  }



  render() {
    // let items = this.state.items.map((val, key) => {
    //   return <item key={key} text={val}
    //     deleteMethod={ () => this.onDelete(key)} />
    //     console.log(items)
    //   })

    return (
      <div>
          Enter your list below
          <form className="App" onSubmit={this.onSubmit}>
       <input value={this.state.term} onChange={this.onChange} />
       <button>Submit</button>
   </form>
   <section>
   <ul>
    {
      this.state.items.map((item, index) => <li key={index}>{item} <button key={index} onClick={this.onDelete}>Remove</button><button>Edit</button></li>)
    }
  </ul>
   </section>
    
      </div>
    );
  }
}

