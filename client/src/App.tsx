import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AUTH_CLIENT_ID } from './constants';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth';
import Home from './pages/Home';
import { ThemeModeProvider, useThemeMode } from './contexts/ThemeModeContext';
import { darkTheme, lightTheme } from './theme';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { theme } = useThemeMode()

  console.log(theme)

  return (
    <ThemeModeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GoogleOAuthProvider clientId={AUTH_CLIENT_ID}>
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
                <Home />
              }></Route>
            </Routes>
          </Router>
        </div>
      </GoogleOAuthProvider>
    </ThemeModeProvider>
  );
}

export default App;
