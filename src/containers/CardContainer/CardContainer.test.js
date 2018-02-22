import React from 'react';
import ReactDOM from 'react-dom';
import {CardContainer} from './CardContainer';
import { shallow, mount } from 'enzyme';


describe('CardContainer', () => {
  let pokeTypes = [
    {id:'1',name:'normal',pokemon:['19','20']}, 
    {id:'2',name:'fighting',pokemon:['67','68']}
  ]

  it('matches the Snapshot', () => {
    const cardContainer = shallow(<CardContainer pokeTypes={pokeTypes}/>, { disableLifecycleMethods: true})
    expect(cardContainer).toMatchSnapshot();
  })

})
