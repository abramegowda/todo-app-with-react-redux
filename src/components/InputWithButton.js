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
    const { createAction, title } = this.props;
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

    createAction(payload);
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { title } = this.props;
    const { inputValue } = this.state;
    return (
      <div style={{ marginBottom: '2rem' }}>
        <input
          type='text'
          placeholder={`add new ${title}...`}
          onChange={this.onChange}
          value={inputValue}
          style={{ height: '1.5rem' }}
        />
        <button
          className='createButtonStyle'
          onClick={this.triggerAction}
        >{`Create ${title}`}</button>
      </div>
    );
  }
}

export default InputWithButton;
