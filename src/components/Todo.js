import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {data} = this.props

    return (
      <div>
        <p>{data.task}</p>
      </div>
    )
  }
}
