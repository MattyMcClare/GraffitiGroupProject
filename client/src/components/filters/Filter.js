import React, { Component } from 'react';
import AdvancedFilter from './AdvancedFilter';
import LocationFilter from './LocationFilter';

class Filter extends Component {

  constructor(props){
    super(props);
      this.state = {

      };
  }

  render() {
    return (
      <div className="filter-form">

        <LocationFilter />

        <AdvancedFilter />

        <input type="submit" value="Submit" />

      </div>
    )
  }
}

export default Filter;


// <h3>Filter By: </h3>
// <form>
//   <label for="date">Date: </label>
//   <select id="date" defaultValue="default">
//     <option value="default">All</option>
//     <option value="yesterday">Yesterday</option>
//     <option value="last-week">Last Week</option>
//     <option value="last-month">Last Month</option>
//   </select>
//   <label for="style">Style: </label>
//   <select id="style" defaultValue="default">
//     <option value="defalut">All</option>
//     <option value="slap">Slap</option>
//     <option value="pice">Pice</option>
//     <option value="heaven">Heaven</option>
//     <option value="stencil">Stencil</option>
//   </select>
//   <label>
//     Location:
//     <input type="text" name="name" />
//   </label>
//   <input type="submit" value="Submit" />
// </form>
