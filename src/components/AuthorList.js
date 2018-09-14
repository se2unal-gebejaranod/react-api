import React, { Component } from 'react';
import Author from './Author';
import axios from 'axios';
import '../style/list.css'


class AuthorList extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            authors : {}
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        //this.cambio = this.cambio.bind(this);
    }
    
    /*
    componentWillMount(){
        
        axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/users',
        })
        .then(function(res) {
            console.log(res);
        }).catch(function(error){
            console.error(error); 
        })
    
    }


    render() {
        const domAuthors = this.state.authors.map((author) => 
            <Author name={author.name} age={author.username} genre={author.id}/>)
      
    return (
        <div>
            {domAuthors}
        </div>
    );
  }*/
    

        
    componentDidMount() {
        
        axios.get(`https://dog.ceo/api/breeds/list/all`)
        .then(res => {
            const persons = res.data.message;
            console.log(persons)
            this.setState({ authors: persons });
        })
    }
    
    render() {
        var lista = [];
        var item;

        for (var key in this.state.authors){
            var cont = 0;
            for(var y in this.state.authors[key]) {
                cont += 1;
            } 
            item = <li className="item">{key}: {cont}</li>;
            lista.push(item);
        }

        return (
            <ul className="list">
                {lista}      
            </ul>
        );
    }
    
    /*
    componentDidMount() {
        
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            this.setState({ authors: persons });
        })
    }
    
    render() {
        
        var domAuthors = this.state.authors.map((author) =>
            <Author name={author.name} age={author.username} genre={author.id}/>
        )

        console.log(domAuthors);

        return (
            <div className="list">
                {domAuthors}      
            </div>
        );
    }
    */









}

export default AuthorList;