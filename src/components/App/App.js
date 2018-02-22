import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { connect } from 'react-redux';
import { addTypes } from '../../actions';
import CardContainer from '../../containers/CardContainer/CardContainer'
import fetchPokeTypes from '../../helper.js'


export class App extends Component {

  constructor() {
    super()
  }

  componentDidMount = async () => {
    const json = await fetchPokeTypes();
    this.props.addPokeTypes(json)
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer />
      </div>
    );
  }
}

App.propTypes = {
  pokeTypes: shape({ fake: string }),
  addPokeTypes: func.isRequired
};

export const mapStateToProps = ({ pokeTypes }) => ({ pokeTypes });

export const mapDispatchToProps = dispatch => ({ 
  addPokeTypes: pokeTypes => dispatch(addTypes(pokeTypes)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
