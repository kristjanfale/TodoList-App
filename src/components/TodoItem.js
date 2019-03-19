import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: '#fff',
      padding: '10px',
      border: '1px #000 solid',
      borderRadius: '5px',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
      color: this.props.todo.completed ? '#00e600' : '#000',
      overflow: 'hidden'
    }
  }

  render() {
    const { id, title } = this.props.todo;

    return (
      <div style={this.getStyle()}>
        <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {/* bind the right todo with id */}
        {' '} {/* Space */}
        <b>{ title }</b>
        <button onClick={this.props.deleteTodo.bind(this, id)} style={btn}><b>X</b></button>
      </div>
    )
  }
}

// PropTypes

// name_of_class.propTypes = "Object of props"{
//   todos: PropTypes.arry/object.isRequired
// }
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

const btn = {
  float: 'right',
  backgroundColor: '#00e600',
  color: '#000',
  border: 'none',
  borderRadius: '10px',
  padding: '4px 6px',
  cursor: 'pointer',
};

export default TodoItem;
