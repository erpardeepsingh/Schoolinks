import React from 'react';

export default class ClickAwayCallback extends React.PureComponent {
  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.closeIt();
    }
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  componentDidMount() {
    window.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClickOutside);
  }

  render() {
    return (
      <div className={this.props.className ? this.props.className : 'closeOnOutsideClick'} ref={this.setWrapperRef}>
        {this.props.children}
      </div>
    );
  }
}