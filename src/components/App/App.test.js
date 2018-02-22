import React from 'react';
import renderer from 'react-test-renderer';
// import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('matches the Snapshot', () => {
    const app = shallow(<App />, { disableLifecycleMethods: true})
    expect(app).toMatchSnapshot();
  })

  // it('calls addPokeTypes', () => {
  //   const addPokeTypes = jest.fn()
  //   const wrapper = shallow(<App />)
  //   expect(addPokeTypes)
  // })


})

describe('addPokeTypes', () => {

  it('calls fetch', () => {
    const shallow = mount(<App />, {disableLifecycleMethods: true})
    window.fetch = jest.fn();
    app.addPokeTypes();
    expect(window.fetch).toHaveBeenCalled();
  })
})