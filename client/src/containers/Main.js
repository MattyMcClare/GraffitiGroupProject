import React, { Component } from "react";
import SearchView from "../components/SearchView";
import ErrorView from "../components/ErrorView";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import defaultImage from '../img/default-image.jpg'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortMethod: true,
      location: {
        lat: 0,
        long: 0
      },
      distance: 0,
      allArt: [],
    }

    this.changeSortMethod = this.changeSortMethod.bind(this);
    this.setDefaultLocation = this.setDefaultLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit() {
    const sortBy = this.state.sortMethod ? 'sortbydate' : 'sortbydistance'
    const url = `http://localhost:8080/locations/${sortBy}/lat=${this.state.location.lat}/long=${this.state.location.long}/dis=${this.state.distance}`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({allArt: data})
    });

    request.send();
  }

  changeSortMethod() {
    const changedState = !this.state.sortMethod;
    this.setState({sortMethod: changedState});
    this.handleSearchSubmit();
  }

  setLocation(latLong){
    this.setState({location: latLong});
  }

  setDefaultLocation(){
    this.setState({
      location: {
        lat: 0,
        long: 0
      }
    });
  }

  setDistance(inputDistance){
    this.setState({distance: inputDistance})
  }

  render() {
    return (
      <Router className="main-container">
        <React.Fragment>
          <Switch>
            <Route exact path="/"
              // component={AllArtView}
              render={() => <SearchView
                allArt={this.state.allArt}
                changeSortMethod = {this.changeSortMethod}
                sortMethod = {this.state.sortMethod}
                setLocation = {this.setLocation}
                setDefaultLocation = {this.setDefaultLocation}
                setDistance = {this.setDistance}
                handleSearchSubmit = {this.handleSearchSubmit}
                />
              }
            />
            <Route component={ErrorView} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
