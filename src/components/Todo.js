import React from 'react';
import TodoList from './TodoList';
import './component.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      taskContainerClass: '',
    };
  }

  onTodoClick = showTaskContainer => {
    if (showTaskContainer) {
      const { taskContainerClass } = this.state;
      if (taskContainerClass === 'taskContainerShowAgain') {
        this.setState({ taskContainerClass: 'taskContainerShow' });
      } else {
        this.setState({ taskContainerClass: 'taskContainerShowAgain' });
      }
    } else {
      this.setState({ taskContainerClass: '' });
    }
  };

  render() {
    const { taskContainerClass } = this.state;
    return (
      <>
        <h1 style={{marginLeft: '1rem'}}>Todos</h1>
        <div className='appWrapperStyle'>
          <TodoList
            taskContainerClass={taskContainerClass}
            onTodoClick={this.onTodoClick}
          />
        </div>
      </>
    );
  }
}
export default Todo;
