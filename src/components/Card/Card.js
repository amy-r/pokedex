import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';

class Card extends Component {
  constructor(){
  super()
  }
  render() {
    return (
      <div>
      <h3> {this.props.name} </h3>
      <p> info </p>
    </div>
    )
  }
}

export default Card;