import React, { Component } from "react";
import AllArtView from "../components/AllArtView";
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import defaultImage from '../img/default-image.jpg'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortMethod: true,
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
  }

  changeSortMethod(){
    const changedState = !this.state.sortMethod;
    this.setState({sortMethod: changedState});
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Switch>
            <Route exact path="/"
              // component={AllArtView}
              render={() => <AllArtView
                allArt={this.state.allArt}
                changeSortMethod = {this.changeSortMethod}
                sortMethod = {this.state.sortMethod}
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
