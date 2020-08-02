import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import _noop from 'lodash/noop';
import './component.css';

function Content(props) {
  const triggerAction = () => {
    const { listId, titleAction } = props;
    titleAction(listId);
  };

  const triggerDeleteAction = () => {
    const { listId, deleteAction } = props;
    deleteAction(listId);
  };

  const { listId, isCompleted, label, iconAction } = props;

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
      <div>
        <img
          src='/img/delete.png'
          className='deleteIconStyle'
          alt='delete icons'
          onClick={triggerDeleteAction}
        />
      </div>
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
