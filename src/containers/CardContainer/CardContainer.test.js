import React from 'react';
import ReactDOM from 'react-dom';
import {CardContainer} from './CardContainer';

it.skip('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CardContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

