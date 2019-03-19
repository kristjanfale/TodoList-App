import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import uuid from 'uuid'; // To generate IDs
import axios from 'axios'; // To make a http request


class App extends Component {
  state = {
    todos: []
  }

  // To make an initial http request to 'JSONPlaceholder' use
  // another LifeCycle method (like render())
  // Add '?_limit=10' at the end of URL to limit the number of received todos
  // GET gives back a promes, if it resolves then.(res...)
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
  }

  // Mark Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  // Use spread operator [...x], because I can't just change it, I have to make a copy of it and then filter it
  deleteTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) => {
        this.setState({ todos: [...this.state.todos.filter((todo) => {
          return todo.id !== id
        })] });
      })
  }

  // Add Todo
  // Use spread operator [...x], to make a copy of it and add new data
  // POST request has 2 arguments: 1. URL-same one that I used GET request on. 2. Object, with the data that I want to send
  // POST gives back a promes, if it resolves then.(res...)
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title: title,
      completed: false
    })
      .then((res) => {
        this.setState({ todos: [...this.state.todos, res.data] })
      });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            {/* Need to use render, cus we have 2 componenst */}
            {/* If I don't use exact(only with first one), everything will be on one page */}
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                {/* Take the todos in the state and pass them in the Todos Component as a "props" */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
