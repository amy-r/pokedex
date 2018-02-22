import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { fakeAction } from '../../actions';
import Card from '../../components/Card/Card';
import './CardContainer.css'
import Loading from '../../loading.gif';

export class CardContainer extends Component {

  render() {

  if(this.props.loading) {
    return <img src = { Loading }/>
  }

  else {
    const cards = this.props.pokeTypes.map( (obj) => {
    console.log(obj.name)
    return <Card name= {obj.name}/>
  })

    return (
      <div className = 'CardContainer'>

        {cards}
      </div>
    );
  }
}
}
// CardContainer.propTypes = {
//   fake: shape({ fake: string }),
//   fakeAction: func.isRequired
// };

const mapStateToProps = ({ pokeTypes }) => ({ pokeTypes });
// const mapDispatchToProps = dispatch => ({ fakeAction:
//   () => dispatch(fakeAction())
// });
export default connect(mapStateToProps, null)(CardContainer);
