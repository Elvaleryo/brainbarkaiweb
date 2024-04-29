import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import App from 'core/App';
import theme from 'core/theme/materialUiTheme';

import './index.css';

(async function () {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <App />
        </StyledEngineProvider>
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
})();
