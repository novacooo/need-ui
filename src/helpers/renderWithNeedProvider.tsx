import React, { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { NeedProvider } from '../components';

const renderWithThemeProvider = (children: ReactNode) => render(<NeedProvider>{children}</NeedProvider>);

export default renderWithThemeProvider;
