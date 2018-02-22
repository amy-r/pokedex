import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer'

describe('Card', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('matches a snapshot', () => {

    const card = renderer.create(<Card />).toJSON()
    expect(card).toMatchSnapshot();  
  });
})

  