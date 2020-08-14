import React from "react";
import { LIST_TYPE } from "../constants";
import "./component.css";

const { TODO } = LIST_TYPE;
class InputWithButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputTitle: "",
      inputDescrption: "",
    };
  }

  onTitleChange = e => {
    this.setState({
      inputTitle: e.target.value,
    });
  };

  onDescriptionChange = e => {
    this.setState({
      inputDescrption: e.target.value,
    });
  };

  triggerAction = () => {
    const { createAction, listType, resetAction, onTodoClick } = this.props;
    const { inputTitle, inputDescrption } = this.state;
    const payloadForTodo = {
      id: Math.floor(Math.random() * 10000),
      title: inputTitle,
      description: inputDescrption,
      isCompleted: false,
      taskIds: [],
    };
    const payloadForTask = {
      id: Math.floor(Math.random() * 10000),
      title: inputTitle,
      isCompleted: false,
    };
    const payload = listType === TODO ? payloadForTodo : payloadForTask;

    if (!inputTitle) return null;
    createAction(payload);
    if (listType === TODO) {
      resetAction();
      onTodoClick(false);
    }
    this.setState({
      inputTitle: "",
      inputDescrption: "",
    });
  };

  render() {
    const { listType } = this.props;
    const { inputTitle, inputDescrption } = this.state;
    return (
      <div className='createContainer'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder={`Create ${listType}...`}
            onChange={this.onTitleChange}
            value={inputTitle}
            className='createInputStyle'
          />
          {listType === TODO && (
            <input
              type='text'
              placeholder={`add description...`}
              onChange={this.onDescriptionChange}
              value={inputDescrption}
              className='createDescriptionStyle'
            />
          )}
        </div>
        <button className='createButtonStyle' onClick={this.triggerAction}>
          +
        </button>
      </div>
    );
  }
}

export default InputWithButton;
