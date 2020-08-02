import React from 'react';
import PropTypes from 'prop-types';
import _noop from 'lodash/noop';
import './component.css';

function Icon(props) {
  const triggerAction = () => {
    const { setAction, listId } = props;
    setAction(listId);
  };

  const { isCompleted } = props;
  const src = isCompleted ? '/img/checked.png' : '/img/unchecked.png';

  return (
    <div>
      <img
        src={src}
        alt='completed-status-icon'
        onClick={triggerAction}
        className='checkboxImgStyle'
      />
    </div>
  );
}

Icon.propTypes = {
  isCompleted: PropTypes.bool,
  setAction: PropTypes.func,
};

Icon.defaultProps = {
  isCompleted: false,
  setAction: _noop,
};

export default Icon;
