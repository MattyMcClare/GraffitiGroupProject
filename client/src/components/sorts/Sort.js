import React from 'react';
import SortButton from './SortButton.js'
import './sort.css';

const Sort = (props) => {

  return (
      <div className="sort-form">
          <h4 className="sort-text">Sort By:</h4>
          <SortButton
            buttonState = {props.sortMethod}
            className = {props.sortMethod ? "selected" : ""}
            buttonText = "Most Recent"
            changeSortMethod = {props.changeSortMethod}
          />
          <SortButton
            buttonState = {!props.sortMethod}
            className = {!props.sortMethod ? "selected" : ""}
            buttonText = "Closest"
            changeSortMethod = {props.changeSortMethod}
          />
      </div>
  )

}

export default Sort;
