import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';
// PropTypes are a validation for properties that a component should have

class Todos extends Component {
  render() {
    {/* Acces the todos from App.js */}
    return this.props.todos.map((todo) => {
      {/* Each child in an array or iterator should have a unique key -> id */}
      return <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} deleteTodo={this.props.deleteTodo}/>
    });
  }
}

// PropTypes

// name_of_class.propTypes = "Object of props"{
//   todos: PropTypes.arry/object/func.isRequired
// }
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default Todos;
