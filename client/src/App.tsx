import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AUTH_CLIENT_ID } from './constants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import { useThemeMode } from './contexts/ThemeModeContext';
import { darkTheme, lightTheme } from './theme';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from './contexts/UserContext';
import { MobileProvider } from './contexts/MobileContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import Profile from './pages/Profile';

function App() {

  const { theme } = useThemeMode()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <GoogleOAuthProvider clientId={AUTH_CLIENT_ID}>
        <MobileProvider>
          <UserProvider>
            <div className="App">
              <Router>
                <ToastContainer />
                <Header />
                <Routes>
                  <Route path='/auth' element={
                    <Auth />
                  }>
                  </Route>

                  <Route path='/' element={
                    <ProtectedRoute><Home /></ProtectedRoute>
                  }></Route>

                  <Route path='/profile' element={
                    <ProtectedRoute><Profile /></ProtectedRoute>
                  }></Route>

                </Routes>
              </Router>
            </div>
          </UserProvider>
        </MobileProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
