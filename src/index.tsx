import './index.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ContextProvider } from './context/Context';
import { QueryClientProvider } from 'react-query';
import { queryClient } from './services/queryClient';

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ContextProvider>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ContextProvider>
);