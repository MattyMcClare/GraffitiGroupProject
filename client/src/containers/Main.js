import React, { Component } from "react";
import SearchView from "../components/SearchView";
import ErrorView from "../components/ErrorView";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import ArtView from '../components/artView/ArtView';
import NavBar from "./NavBar.js"
import About from "./About.js"
import Filter from "../components/filters/Filter.js"
import logoImage from '../img/logo.png'
import './Main.css';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toAllArtView: false,
      sortMethod: true,
      location: {
        lat: 0,
        long: 0
      },
      distance: 500,
      allArt: [],
      selectedArtView: {}
    }
    this.changeSortMethod = this.changeSortMethod.bind(this);
    this.setDefaultLocation = this.setDefaultLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    this.setDistance = this.setDistance.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  // previousLocation = this.props.location;

  // componentWillUpdate(nextProps) {
  //   let { location } = this.state;

  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== "POP" &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location;
  //   }

  handleSearchSubmit(){
    this.setState({toAllArtView: true}, ()=>{ this.handleSearchQuery() })
  }

  handleSearchQuery() {
    const sortBy = this.state.sortMethod ? 'sortbydate' : 'sortbydistance'
    const url = `http://localhost:8080/locations/${sortBy}/lat=${this.state.location.lat}/long=${this.state.location.long}/dis=${this.state.distance}/`;
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if (request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);
      this.setState({ allArt: data })
      console.log(this.state.allArt)
    });

    request.send();
  }

  changeSortMethod() {

    const sortMethod = this.state.sortMethod;
    this.setState({ sortMethod: !sortMethod }, () => {
      this.handleSearchSubmit()
    })
  }

  setLocation(latLong) {
    this.setState({ location: latLong });
  }

  setDefaultLocation() {
    this.setState({
      location: {
        lat: 0,
        long: 0
      }
    });
  }

  setDistance(inputDistance) {
    this.setState({ distance: inputDistance })
  }



  render() {
    return (
      <Router>
      <React.Fragment>
        <div className="main-container">
          <a href="/"><img className="logo-image" src={logoImage} alt="tagslogo"/></a>
          <NavBar />
          <div className="body-content">
            <Switch>
              <Route exact path="/"
                render={() => {
                  if (this.state.toAllArtView === true) {
                    return <Redirect to='/all-art' />
                  } else {
                    return(
                    <div className="background-image">
                    <h1>Discover a curated collection of street art in Scotland</h1>
                    <Filter
                    setLocation={this.setLocation}
                    setDefaultLocation={this.setDefaultLocation}
                    setDistance={this.setDistance}
                    handleSearchSubmit={this.handleSearchSubmit}
                    />
                    </div>) }
                }}
              />
              <Route
                path="/all-art"
                render={() => <SearchView
                  allArt={this.state.allArt}
                  changeSortMethod={this.changeSortMethod}
                  sortMethod={this.state.sortMethod}
                  setLocation={this.setLocation}
                  setDefaultLocation={this.setDefaultLocation}
                  setDistance={this.setDistance}
                  handleSearchSubmit={this.handleSearchSubmit}
                />
                }
              />
              <Route
                path="/art/:id"
                render={() => <ArtView
                  selectedArtView={this.state.selectedArtView}
                />}
              />
              <Route path="/about"
                component={About}
              />
              <Route component={ErrorView} />
            </Switch>
            {/* {false ? <Route path="/art/:id" component={ModalView} /> : null} */}
        </div>
      </div>
    </React.Fragment>
      </Router>
    );
  }
}
export default Main;
