import React from 'react';
import SortButton from './SortButton.js'

const Sort = (props) => {

  return (
      <div className="sort-form">
          <h4>Sort By:</h4>
          <SortButton
            buttonState = {props.sortMethod}
            buttonText = "Most Recent"
            changeSortMethod = {props.changeSortMethod}
          />
          <SortButton
            buttonState = {!props.sortMethod}
            buttonText = "Closest"
            changeSortMethod = {props.changeSortMethod}
          />
      </div>
  )

}

export default Sort;
