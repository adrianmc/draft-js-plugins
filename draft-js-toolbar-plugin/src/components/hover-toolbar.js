import React, { Component } from 'react';
import Toolbar from './toolbar';

export default class HoverToolbar extends Component {
  state = {
    hover: false,
    hoverToolbar: false,
  };

  componentDidMount() {
    if (this.props.parent) {
      const parentEl = document.querySelector(this.props.parent);

      if (!parentEl) {
        return;
      }

      this.DOMNode = parentEl;
      this.DOMNode.addEventListener('mouseover', this.onMouseOver);
      this.DOMNode.addEventListener('mouseleave', this.onMouseLeave);
    }
  }

  componentWillUnmount() {
    if (this.DOMNode) {
      this.DOMNode.removeEventListener('mouseover', this.onMouseOver);
      this.DOMNode.removeEventListener('mouseleave', this.onMouseLeave);
    }
  }

  onMouseOver = () => {
    this.setState({ hover: true });
  };

  onMouseOverToolbar = () => {
    this.setState({ hoverToolbar: true });
  };

  onMouseLeave = () => {
    setTimeout(() => {
      if (!this.state.hoverToolbar) {
        this.setState({ hover: false });
      }
    }, 150);
  };

  onMouseLeaveToolbar = () => {
    this.setState({ hoverToolbar: false, hover: false });
  };

  render() {
    const { hover } = this.state;
    return (
      <Toolbar {...this.props}
        active={hover}
        onMouseOver={ this.onMouseOverToolbar }
        onMouseLeave={ this.onMouseLeaveToolbar }
      />
    );
  }
}