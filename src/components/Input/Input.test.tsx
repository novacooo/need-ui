import React from 'react';
import Input from './Input';
import renderWithThemeProvider from '../../helpers/renderWithNeedProvider';

describe('Input', () => {
  it('renders component', () => {
    renderWithThemeProvider(<Input placeholder="Test" />);
  });
});
