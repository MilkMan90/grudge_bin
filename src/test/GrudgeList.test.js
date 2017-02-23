import React from 'react';
import ReactDOM from 'react-dom';
import GrudgeList from '../Components/GrudgeList';
import grudges from './fakeGrudges'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <GrudgeList grudges = {grudges}
    />, div);
});
