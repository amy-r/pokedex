import React from 'react';
import ReactDOM from 'react-dom';
import {CardContainer} from './CardContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const 
  ReactDOM.render(<CardContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});