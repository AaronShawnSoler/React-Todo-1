import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props)
    this.state = {
      todo: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }

    this.addTodo = this.addTodo.bind(this)
    this.removeTodo = this.removeTodo.bind(this)
    this.completeTask = this.completeTask.bind(this)
  }

  addTodo(taskName) {
    this.setState(state => {
      return {
        todo: [
          ...state.todo,
          {
            task: taskName,
            id: Date.now(),
            completed: false
          }
        ]
      }
    })
  }

  removeTodo() {
    this.setState(state => {
      return {
        todo: state.todo.filter(todoItem => todoItem.completed == false)
      }
    })
  }

  completeTask(id) {
    this.setState(state => {
      return {
        todo: state.todo.map(todoItem => {
          if(todoItem.id == id) {
            return {
              ...todoItem,
              completed: true
            }
          } else return todoItem
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm add={this.addTodo} remove={this.removeTodo}/>
        <TodoList todoItems={this.state.todo} completeTask={this.completeTask}/>
      </div>
    );
  }
}

export default App;
