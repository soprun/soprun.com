import React from 'react';
import Layout from "./Layout";
import {render} from '@testing-library/react';
// import { render } from '@testing-library/react';
// import Layout from './Layout';

test('ok', () => {
  expect(true);
});

test('renders learn react link', () => {
  const {getByText} = render(<Layout/>);
  const linkElement = getByText(/Page, the page!/i);
  expect(linkElement).toBeInTheDocument();
});
