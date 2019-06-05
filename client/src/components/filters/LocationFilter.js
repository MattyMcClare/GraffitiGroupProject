import React, { Component } from 'react';
import GeolocationButton from './geolocationbutton/GeolocationButton.js';
import './LocationFilter.css'

class LocationFilter extends Component {

  constructor(props) {
    super(props);
    this.handleGeolocatorClick = this.handleGeolocatorClick.bind(this);
    this.handleDistanceSelectChange = this.handleDistanceSelectChange.bind(this);
    this.handleStringLocationInput = this.handleStringLocationInput.bind(this);
  }

  handleGeolocatorClick(evt) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coordString = `${position.coords.latitude},${position.coords.longitude}`;
        this.props.onStringLocation(coordString);
      });
    } else {
    }
  }

  handleDistanceSelectChange(evt) {
    this.props.onDistanceSelectChange(evt.target.value);
  }

  handleStringLocationInput(evt) {
    this.props.onStringLocation(evt.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <GeolocationButton handleGeolocatorClick={this.handleGeolocatorClick} />
        <input
          className="search-box"
          type="text"
          name="address"
          placeholder="Enter location or postcode..."
          value={this.props.stringLocation}
          onChange={this.handleStringLocationInput}
        />
        <select name="distance-filter" onChange={this.handleDistanceSelectChange}>
          <option value={500}>Distance &darr;</option>
          <option value={1}>under 1km</option>
          <option value={5}>under 5km</option>
          <option value={25}>under 25km</option>
          <option value={50}>under 50km</option>
          <option value={100}>under 100km</option>
          <option value={200}>under 200km</option>
          <option value={500}>All of Scotland</option>
        </select>
      </React.Fragment>
    )
  }

}

export default LocationFilter;
