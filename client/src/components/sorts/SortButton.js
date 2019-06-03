import React from 'react';

const SortButton = (props) => {

  const handleClickEvent = () => {
    if (props.buttonState === false){
      props.onClickEvent;
    }
  }

  return(
    <button onClick={}>
      {props.buttonText}
    </button>
  )

}

export default SortButton;
