import React from 'react';
import Button from './Button';
import renderWithThemeProvider from '../../helpers/renderWithNeedProvider';

describe('Button', () => {
  it('renders component', () => {
    renderWithThemeProvider(<Button>Click me</Button>);
  });
});
