import React, { Component } from 'react';
import GeolocationButton from './geolocationbutton/GeolocationButton.js';

class LocationFilter extends Component {

  constructor(props){
    super(props);
    this.handleGeolocatorClick = this.handleGeolocatorClick.bind(this);
    this.handleDistanceSelectChange = this.handleDistanceSelectChange.bind(this);
    this.handleStringLocationInput = this.handleStringLocationInput.bind(this);
  }

  handleGeolocatorClick(evt){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        const coordString = `(${position.coords.latitude}, ${position.coords.longitude})`;
        this.props.onStringLocation(coordString);
      });
    } else {
    }
  }

  handleDistanceSelectChange(evt){
    this.props.onDistanceSelectChange(evt.target.value);
  }

  handleStringLocationInput(evt){
    this.props.onStringLocation(evt.target.value);
  }

  render(){
    return (
      <div className="location-filter">
        <GeolocationButton handleGeolocatorClick = {this.handleGeolocatorClick}/>
        <input
          type="text"
          name="address"
          placeholder="Enter location or postcode..."
          value={this.props.stringLocation}
          onChange = {this.handleStringLocationInput}
        />
        <select name="distance-filter" onChange = {this.handleDistanceSelectChange}>
          <option value = {0}>Distance from Location</option>
          <option value = {1}>less than 1km</option>
          <option value = {3}>less than 3km</option>
          <option value = {5}>less than 5km</option>
          <option value = {10}>less than 10km</option>
          <option value = {50}>less than 50km</option>
          <option value = {0}>All of Scotland</option>
        </select>
      </div>
    )
  }

}

export default LocationFilter;
