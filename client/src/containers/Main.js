import React, { Component } from "react";
import AllArtView from "../components/AllArtView";
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import defaultImage from '../img/default-image.jpg'
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortMethod: true,
      location: {
        lat: 55.95206,
        long: -3.19648
      },
      distance: 0,

      allArt: [
        {
          id: 1,
          img: defaultImage,
          handle: 'MattyG',
          signature: defaultImage,
          location: 'EH1 1AW'
        },
        {
          id: 2,
          img: defaultImage,
          handle: 'AlanR',
          signature: defaultImage,
          location: 'EH3 3GH'
        }
      ]
    }

    this.changeSortMethod = this.changeSortMethod.bind(this);
    this.setDefaultLocation = this.setDefaultLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setDistance = this.setDistance.bind(this);
  }

  changeSortMethod() {
    const changedState = !this.state.sortMethod;
    this.setState({ sortMethod: changedState });
  }

  setLocation(latLong){
    this.setState({location: latLong});
  }

  setDefaultLocation(){
    this.setState({
      location: {
        lat: 55.95206,
        long: -3.19648
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
              render={() => <AllArtView
                allArt={this.state.allArt}
                changeSortMethod = {this.changeSortMethod}
                sortMethod = {this.state.sortMethod}
                setLocation = {this.setLocation}
                setDefaultLocation = {this.setDefaultLocation}
                setDistance = {this.setDistance}
                />
                }
              />
            <Route component={ErrorPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
