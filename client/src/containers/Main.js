import React, { Component } from "react";
import AllArtView from "../components/AllArtView";
import ErrorPage from "../components/ErrorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import defaultImage from '../img/default-image.jpg'
import ArtView from '../components/artView/ArtView'
import ModalView from '../components/artView/ModalView'

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: null,
      open: true,
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
        },
        {
          id: 3,
          img: defaultImage,
          handle: 'Stefan',
          signature: defaultImage,
          location: 'EH5 8UP'
        },
        {
          id: 4,
          img: defaultImage,
          handle: 'Mike',
          signature: defaultImage,
          location: 'EH7 1TH'
        }
      ],
      selectedArtView: {
        img: defaultImage,
        handle: 'MattyG',
        signature: defaultImage,
        location: 'EH1 1AW',
        worksByArtist: [
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
          },
          {
            id: 3,
            img: defaultImage,
            handle: 'Stefan',
            signature: defaultImage,
            location: 'EH5 8UP'
          },
          {
            id: 4,
            img: defaultImage,
            handle: 'Mike',
            signature: defaultImage,
            location: 'EH7 1TH'
          }
        ]
      }
    }
    this.onCloseModal = this.onCloseModal.bind(this)
    this.onOpenModal = this.onOpenModal.bind(this)
    this.changeSortMethod = this.changeSortMethod.bind(this);

  }
  //SORTING
  changeSortMethod() {
    const changedState = !this.state.sortMethod;
    this.setState({ sortMethod: changedState });
  }

  // MODAL WINDOW
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    let { location } = this.state;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  render() {
    let { location } = this.state;

    // let isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // ); // not initial render
    return (
      <Router>
        <React.Fragment>
          <Switch location={true ? this.previousLocation : location}>
            <Route exact path="/gallery"
              render={() => <AllArtView
                allArt={this.state.allArt}
                changeSortMethod={this.changeSortMethod}
                sortMethod={this.state.sortMethod}
                open={this.state.open}
                onOpenModal={this.onOpenModal}
                onCloseModal={this.onCloseModal}
              // selectedArtView={this.state.selectedArtView}
              />
              }
            />
            <Route path='/art/:id'
              render={() => <ArtView
                selectedArtView={this.state.selectedArtView}
                open={this.state.open}
                onOpenModal={this.onOpenModal}
                onCloseModal={this.onCloseModal}
              />
              }
            />
            <Route component={ErrorPage} />
          </Switch>
          {false ? <Route path="/art/:id" component={ModalView} /> : null}
        </React.Fragment>
      </Router>
    );
  }
}

export default Main;
