import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import './Card.css'

class Card extends Component {
  constructor(){
  super()
  }
  render() {
    return (
      <div className= 'Card'>
      <h3> {this.props.name} </h3>
    </div>
    )
  }
}

export default Card;