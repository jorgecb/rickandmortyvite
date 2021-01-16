import React from 'react';
import ReactDOM from 'react-dom';
import { create } from "react-test-renderer";
import TestUtils from 'react-dom/test-utils';
import Filter from '../components/Filter';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Filter />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("snapshot", () => {
  const c = create(<Filter />);
  expect(c.toJSON()).toMatchSnapshot();
});
