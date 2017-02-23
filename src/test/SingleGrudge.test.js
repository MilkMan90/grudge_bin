import React from 'react';
import ReactDOM from 'react-dom';
import SingleGrudge from '../Components/SingleGrudge';
import grudges from './fakeGrudges'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <SingleGrudge
      key={grudges[0].id}
      grudge={grudges[0]}
    />, div);
});
