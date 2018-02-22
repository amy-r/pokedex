import React from 'react';
import renderer from 'react-test-renderer';
// import ReactDOM from 'react-dom';
import { App } from './App';
import { shallow, mount } from 'enzyme';

describe('App', () => {
  it('matches the Snapshot', () => {
    const app = renderer.create(<App />).toJSON();
    expect(app).toMatchSnapshot();
  })

  it.skip('calls addPokeTypes', () => {
    const addPokeTypes = jest.fn()
    const wrapper = mount(<App />)
    expect(addPokeTypes.mock.calls.length).toBe(1)
  })


})