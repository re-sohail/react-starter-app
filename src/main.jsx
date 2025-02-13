import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.jsx';

// SWR Config Provider
import SWRProvider from './services/SWRProvider';

// Theme Provider
import ThemeProvider from './contexts/ThemeContext';

createRoot(document.getElementById('root')).render(
  <SWRProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </SWRProvider>,
);
