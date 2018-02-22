import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { connect } from 'react-redux';
import { addTypes } from '../../actions';
import CardContainer from '../../containers/CardContainer/CardContainer'


class App extends Component {

constructor() {
  super()
}
// we want to call the api to get types on on component did mount
// then we want to async/await/ resolve the promises that we get/json/do the things to get our data in usable form
// send types of pokemon in the store
// pass down store through props
// display pokemon types in connected components

  componentDidMount = async () => {
    this.addPokeTypes();
    console.log(this.props)
  }

  addPokeTypes = async () => {
    const response = await fetch('http://localhost:3001/types')
    const json = await response.json();
    this.props.addPokeTypes(json); 
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer pokeTypes='this.props.pokeTypes' />
        <FakeContainer />
      </div>
    );
  }
}

App.propTypes = {
  pokeTypes: shape({ fake: string }),
  addPokeTypes: func.isRequired
};

const mapStateToProps = ({ pokeTypes }) => ({ pokeTypes });

export const mapDispatchToProps = dispatch => ({ 
  addPokeTypes: pokeTypes => dispatch(addTypes(pokeTypes)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
