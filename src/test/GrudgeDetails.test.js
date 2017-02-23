import React from 'react';
import ReactDOM from 'react-dom';
import GrudgeDetails from '../Components/GrudgeDetails';
import grudges from './fakeGrudges'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GrudgeDetails grudge = {grudges[0]}
    />, div);
});
