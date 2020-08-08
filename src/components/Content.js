import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import _noop from 'lodash/noop';
import './component.css';
import { LIST_TYPE } from '../constants';

function Content(props) {
  const triggerAction = () => {
    const { listId, titleAction, title, onTodoClick } = props;
    titleAction(listId);
    if (title === TODO) {
      onTodoClick(true);
    }
  };

  const triggerDeleteAction = () => {
    const { listId, deleteAction, title, onTodoClick } = props;
    deleteAction(listId);
    if (title === TODO) {
      onTodoClick(false);
    }
  };

  const renderTasksCount = () => {
    const { totalTasks } = props;
    return (
      <div className='noOfTasksIndicator'>
        <span>{`${totalTasks}`}</span>
      </div>
    );
  };

  const { listId, isCompleted, label, iconAction, title } = props;
  const { TODO } = LIST_TYPE;

  return (
    <div className='contentContainerStyle'>
      <Icon isCompleted={isCompleted} listId={listId} setAction={iconAction} />
      <div
        role='button'
        tabIndex='0'
        onClick={triggerAction}
        className='labelStyle'
      >
        {label}
      </div>
      {title === TODO && renderTasksCount()}
      <div>
        <img
          src='/img/remove.svg'
          className='deleteIconStyle'
          alt='delete icons'
          onClick={triggerDeleteAction}
        />
      </div>
      {title === TODO && (
        <img
          className='rightArrowIconStyle'
          src='/img/right-chevron.svg'
          alt='right arrow'
          onClick={triggerAction}
        />
      )}
    </div>
  );
}

Content.propTypes = {
  titleAction: PropTypes.func,
};

Content.defaultProps = {
  titleAction: _noop,
};

export default Content;
