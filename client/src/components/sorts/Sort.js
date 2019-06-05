import React from 'react';
import SortButton from './SortButton.js'
import './sort.css';

const Sort = (props) => {

  const mostRecent = props.sortMethod;
  const notMostRecent = !props.sortMethod;

  return (
      <div className="sort-form">
          <h4 className="sort-text">Sort By:</h4>
          <SortButton
            buttonState = {mostRecent}
            buttonText = "Most Recent"
            changeSortMethod = {props.changeSortMethod}
          />
          <SortButton
            buttonState = {notMostRecent}
            buttonText = "Closest"
            changeSortMethod = {props.changeSortMethod}
          />
      </div>
  )

}

export default Sort;
