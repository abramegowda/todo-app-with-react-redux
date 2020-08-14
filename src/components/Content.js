import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import _noop from 'lodash/noop';
import './component.css';
import { LIST_TYPE } from '../constants';

function Content(props) {
  const triggerAction = () => {
    const { listId, titleAction, listType, onTodoClick } = props;
    titleAction(listId);
    if (listType === TODO) {
      onTodoClick(true);
    }
  };

  const triggerDeleteAction = () => {
    const { listId, deleteAction, listType, onTodoClick } = props;
    deleteAction(listId);
    if (listType === TODO) {
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

  const { listId, isCompleted, title, description, iconAction, listType } = props;
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
        <div className="title">{title}</div>
        {listType === TODO &&
          <div className="description">{description}</div>}
      </div>
      {listType === TODO && renderTasksCount()}
      <div>
        <img
          src='/img/remove.svg'
          className='deleteIconStyle'
          alt='delete icons'
          onClick={triggerDeleteAction}
        />
      </div>
      {listType === TODO && (
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
