import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = {form: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({form: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Todo: 
          <input type="text" value={this.state.form} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Add Todo"/>
        <input type="button" value="Clear Completed"/>
      </form>
    )
  }
}
