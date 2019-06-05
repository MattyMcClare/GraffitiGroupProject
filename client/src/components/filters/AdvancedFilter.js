import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';

class AdvancedFilter extends Component {

  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  render(){
    return (
      <div className="advanced-filter">
        <ToggleDisplay show={this.state.show}>
          This is the advanced search options.
          <p className="link" onClick={ () => this.handleClick() }>Less Search Options &uarr;</p>
        </ToggleDisplay>
        <ToggleDisplay show={!this.state.show}>
          <p className="link" onClick={ () => this.handleClick() }>More Search Options &darr;</p>
        </ToggleDisplay>
      </div>
    )
  }
}

export default AdvancedFilter
