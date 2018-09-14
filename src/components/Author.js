import React, { Component } from 'react';
class Author extends Component {
    
    constructor(props){
        super(props);
    }
    
  render() {
    return (
        <div>
           <label>name: {this.props.name} </label><br/>
           <label>age: {this.props.age} </label><br/>
           <label>genre: {this.props.genre} </label><br/>
        </div>
    );
  }
}

export default Author;