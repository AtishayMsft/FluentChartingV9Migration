import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FluentProvider } from '@fluentui/react-components';
import {  myCustomTheme } from './components/theme';
import { WrapperComp } from './components/WrapperComp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <FluentProvider theme={myCustomTheme} >
    <App />
    <WrapperComp />
  </FluentProvider>
);
