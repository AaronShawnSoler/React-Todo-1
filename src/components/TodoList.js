// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {todoItems, completeTask} = this.props

    return (
      <div>
        {todoItems.map((item, index) => <Todo data={item} key={index} completeTask={completeTask}/>)}
      </div>
    )
  }
}
