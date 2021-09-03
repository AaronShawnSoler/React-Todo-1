import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props

    const completedTask = {
      color: data.completed ? 'green' : 'red'
    }

    return (
      <div>
        <p style={completedTask}>{data.task}</p>
      </div>
    )
  }
}
