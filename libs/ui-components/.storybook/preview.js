import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/lib/theme-provider/theme-provider';
import { BrowserRouter } from 'react-router-dom';

addDecorator((story) => (
  <ThemeProvider>
    <BrowserRouter>{story()}</BrowserRouter>
  </ThemeProvider>
));
