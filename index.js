import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './src/App';
import reportWebVitals from './src/reportWebVitals';
import ThemeContextProvider from './src/contexts/ThemeContext'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

ReactDOM.render(
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>,
  document.getElementById('root')
);


reportWebVitals();
