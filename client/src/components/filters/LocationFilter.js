import React, { Component } from 'react';
import GeolocationButton from './geolocationbutton/GeolocationButton.js';

class LocationFilter extends Component {

  constructor(props){
    super(props);
    this.state = {
      location: '',
    };

    this.handleGeolocatorClick = this.handleGeolocatorClick.bind(this);
  }

  handleGeolocatorClick(evt){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( (position) => {
        const coordString = `(${position.coords.latitude}, ${position.coords.longitude})`;
        this.setState( {location: coordString});
      });
    } else {
    }
  }

  render(){
    return (
      <div className="location-filter">
        <GeolocationButton handleGeolocatorClick = {this.handleGeolocatorClick}/>
        <input type="text" name="postcode" placeholder="Enter location or postcode..." defaultValue={this.state.location}/>
        <select>
          <option disabled selected>Distance from Location</option>
          <option value = {1}>less than 1km</option>
          <option value = {2}>less than 3km</option>
          <option value = {3}>less than 5km</option>
          <option value = {4}>less than 10km</option>
          <option value = {5}>less than 50km</option>
          <option>All of Scotland</option>
        </select>
      </div>
    )
  }

}

export default LocationFilter;
