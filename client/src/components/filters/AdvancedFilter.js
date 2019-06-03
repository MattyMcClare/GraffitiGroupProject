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
        <button onClick={ () => this.handleClick() }>More Search Options</button>
        <ToggleDisplay show={this.state.show}>
          This is the advanced search options.
        </ToggleDisplay>
      </div>
    )
  }
}

export default AdvancedFilter
