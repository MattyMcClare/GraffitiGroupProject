import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

class AdvancedFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      style: "null"
    };
    this.handleStyleSelectChange = this.handleStyleSelectChange.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  handleStyleSelectChange(evt) {
    this.props.onStyleSelectChange(evt.target.value);
  }

  render() {
    return (
      <React.Fragment>
        <div className="advanced-filter">
          <ToggleDisplay show={this.state.show}>
            <select name="style-filter" onChange={this.handleStyleSelectChange}>
              <option value={"all"}>All Styles</option>
              <option value={"tag"}>Tag Style</option>
              <option value={"throwup"}>Throwup Style</option>
              <option value={"blockbuster"}>Blockbuster Style</option>
              <option value={"wildstyle"}>Wildstyle</option>
              <option value={"heaven"}>Heaven Style</option>
              <option value={"stencil"}>Stencil Style</option>
              <option value={"pasteup"}>Pasteup Style</option>
              <option value={"slap"}>Slap Style</option>
              <option value={"piece"}>Piece Style</option>
            </select>
            <p className="link" onClick={() => this.handleClick()}>
              Less Search Options &uarr;
            </p>
          </ToggleDisplay>
          <ToggleDisplay show={!this.state.show}>
            <p className="link" onClick={() => this.handleClick()}>
              More Search Options &darr;
            </p>
          </ToggleDisplay>
        </div>
      </React.Fragment>
    );
  }
}

export default AdvancedFilter;
