import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodo extends Component {
  state = {
    title: ''
  }

  addTitle = (e) => {
    this.setState({ [e.target.name]: e.target.value}); {/* Set the title(e.target.name) to whatever the value in input is, with the help of e(event)*/}
  }

  onSubmit = (e) => {
    e.preventDefault(); {/* prevent submiting to the file(like in Vanilla JS) */}
    this.props.addTodo(this.state.title); {/* Call props method, to pass this up */}
    this.setState({title: ''}); {/* Clear the input field */}
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex', marginBottom: '4px'}}>
        <input
          style={{flex: '10', padding: '5px', borderRadius: '10px'}}
          type="text"
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.addTitle}
        />
        <input
          style={{flex: '2'}}
          className="button"
          type="submit"
          value="ADD"
        />
      </form>
    )
  }
}

// PropTypes

// name_of_class.propTypes = "Object of props"{
//   todos: PropTypes.arry/object.isRequired
// }
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodo;
