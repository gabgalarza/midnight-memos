import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LoadMoreButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false
    }
  }

  handleClick(e) {
    this.setState({
      clicked: true
    })

    this.props.action();
  }

  render() {
    const { clicked } = this.state;
    return (
      <div
        className={`load-comments ` + `${clicked ? `hide`: ``}`}
        onClick={(e) => { this.handleClick(e); }}
      >
        {this.props.children}
      </div>
    );
  }
}

LoadMoreButton.propTypes = {
  action: PropTypes.func.isRequired,
  children: PropTypes.node
}

export default LoadMoreButton