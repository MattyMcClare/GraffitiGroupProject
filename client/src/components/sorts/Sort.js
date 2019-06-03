import React from 'react';
import SortButton from './SortButton.js'

const Sort = (props) => {

  const onClickEvent = () => {
    props.buttonState = !props.buttonState;
  }

  return (
      <div className="sort-form">
          <h4>Sort By:</h4>
          <SortButton
            buttonState = {props.buttonState}
            buttonText = "Most Recent"
            onClickEvent = {onClickEvent}
          />
          <SortButton
            buttonState = {!props.buttonState}
            buttonText = "Closest"
            onClickEvent = {onClickEvent}
          />
      </div>
  )

}

export default Sort;
