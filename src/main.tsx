import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './routes/App.tsx';

const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <QueryClientProvider client={new QueryClient()}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<App />} />
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </StrictMode>,
    );
}
