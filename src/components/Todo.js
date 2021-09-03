import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data, completeTask} = this.props

    const completedTask = {
      color: data.completed ? 'green' : 'red'
    }

    return (
      <div>
        <p style={completedTask} onClick={() => completeTask(data.id)}>{data.task}</p>
      </div>
    )
  }
}
