import React from "react";
import ClickAwayCallback from "../ClickAwayCallback";
import "./index.css";

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
    };
    this.closePopUp = this.closePopUp.bind(this);
    this.showPopUp = this.showPopUp.bind(this);
  }

  closePopUp(e) {
    if (this.state.display === "block") {
      this.setState({ display: "none" });
    }
  }

  showPopUp() {
    this.setState({ display: "block" }, () => {
      if (this.props.refs) this.props.refs.current.scrollTop = 0;
    });
    if (this.props.onChangeDisplay) this.props.onChangeDisplay("block");
  }

  onClickHandler(e) {
    const { display } = this.state;
    if (display === "none") {
      this.showPopUp();
    } 
  }

  render() {
    const {
      children,
      menuChildren,
      top,
      left,
      width,
      height,
      maxHeight,
      maxWidth,
      boxShadow,
      border,
      backgroundColor,
      borderRadius,
      backgroundImage,
      customStyles,
    } = this.props;
    const dropDownStyle = {
      maxHeight,
      maxWidth,
      top,
      left,
      width,
      height,
      boxShadow,
      border,
      backgroundColor,
      borderRadius,
      backgroundImage,
      display: `${this.state.display}`,
      zIndex: "10000000000",
    };

    return (
      <ClickAwayCallback closeIt={this.closePopUp}>
        <div className="dropdown" style={{ ...customStyles }}>
          <div
            style={{
              background: this.props.color ? this.props.color : "#fff",
            }}
            onClick={(e) => this.onClickHandler(e)}
          >
            {children}
          </div>
          <div className={` dropdown-content`} style={dropDownStyle}>
            {menuChildren}
          </div>
        </div>
      </ClickAwayCallback>
    );
  }
}

Dropdown.defaultProps = {
  top: "50px",
  left: "-100px",
  width: "200px",
  height: "10px",
  menu: false,
};
