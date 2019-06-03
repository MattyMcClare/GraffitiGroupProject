import React from 'react';

const SortButton = (props) => {

  const handleClickEvent = () => {
    if (props.buttonState === false){
      props.changeSortMethod();
    }
  }

  return(
    <button
      onClick={handleClickEvent}
      className = {"sort-button" + (props.buttonState ? ' selected' : '')}
    >
      {props.buttonText}
    </button>
  )

}

export default SortButton;
