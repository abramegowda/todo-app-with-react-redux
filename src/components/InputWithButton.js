import React from 'react';
import { LIST_TYPE } from '../constants';
import './component.css';

class InputWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  onChange = e => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  triggerAction = () => {
    const { createAction, title, resetAction, onTodoClick } = this.props;
    const { inputValue } = this.state;
    const payloadForTodo = {
      id: Math.floor(Math.random() * 10000),
      title: inputValue,
      isCompleted: false,
      taskIds: [],
    };
    const payloadForTask = {
      id: Math.floor(Math.random() * 10000),
      title: inputValue,
      isCompleted: false,
    };
    const { TODO } = LIST_TYPE;
    const payload = title === TODO ? payloadForTodo : payloadForTask;

    if (inputValue) {
      createAction(payload);
      if (title === TODO) {
        resetAction();
        onTodoClick(false);
      }
      this.setState({
        inputValue: '',
      });
    } else {
      alert('Enter Valid Title');
    }
  };

  render() {
    const { title } = this.props;
    const { inputValue } = this.state;
    return (
      <div className='createContainer'>
        <input
          type='text'
          placeholder={`Create ${title}...`}
          onChange={this.onChange}
          value={inputValue}
          className='createInputStyle'
        />
        <button
          className='createButtonStyle'
          onClick={this.triggerAction}
        >+</button>
      </div>
    );
  }
}

export default InputWithButton;
