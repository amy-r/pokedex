import React, { Component } from 'react';
import './App.css';
import FakeContainer from '../../containers/FakeContainer/'
import { getPokemonTypes } from '../../helper.js';
import { connect } from 'react-redux';
import { addTypes } from '../../actions';


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
    const pokeTypes = await getPokemonTypes();
    // console.log(this.props)
    this.props.addPokeTypes(pokeTypes);
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}


// const mapStateToProps = ({ type }) => ({ type });

export const mapDispatchToProps = dispatch => ({ 
  addPokeTypes: pokeTypes => dispatch(addTypes(pokeTypes)) 
});

export default connect(null, mapDispatchToProps)(App);
