import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { TanStackDevtools } from '@tanstack/react-devtools';
import { FormDevtoolsPlugin } from '@tanstack/react-form-devtools';
import './styles/index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './routes/App.tsx';
import { ThemeProvider } from './components/ui/theme-provider.tsx';
import Login from './routes/Login.tsx';
import { Layout, FormColLayout } from './layouts/index.tsx';
import { SignUp } from './routes/SignUp.tsx';
import { Toaster } from 'sonner';
import { AuthProvider } from './context';
import { Profile } from './routes/Profile.tsx';
import { RestaurantView } from './routes/RestaurantView.tsx';
import { Restaurants } from './routes/Restaurants.tsx';
import { AddRestaurant } from './routes/AddRestaurant.tsx';
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <QueryClientProvider client={new QueryClient()}>
        <AuthProvider>
          <TanStackDevtools plugins={[FormDevtoolsPlugin()]} />
          <BrowserRouter>
            <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
              <Routes>
                <>
                  <Route element={<Layout />}>
                    <Route path='/' element={<App />} />
                    <Route path='/profile/:currentUser' element={<Profile />} />
                    <Route path='/restaurants' element={<Restaurants />} />
                    <Route
                      path='/restaurants/add'
                      element={<AddRestaurant />}
                    />
                    <Route
                      path='/restaurants/:restaurantId'
                      element={<RestaurantView />}
                    />
                  </Route>
                  <Route element={<FormColLayout />}>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<SignUp />} />
                  </Route>
                </>
              </Routes>
              <Toaster />
            </ThemeProvider>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>,
  );
}
