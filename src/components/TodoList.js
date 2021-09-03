// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todo from './Todo'

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {todoItems} = this.props
    
    return (
      <div>
        {todoItems.map(item => <Todo data={item}/>)}
      </div>
    )
  }
}
