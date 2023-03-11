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
import { MenuProvider } from './contexts/MenuContext';
import ProtectedRoute from './components/ProtectedRoute';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import Profile from './pages/Profile';
import Search from './pages/Search';

function App() {

  const { theme } = useThemeMode()

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <GoogleOAuthProvider clientId={AUTH_CLIENT_ID}>
        <MenuProvider>
          <UserProvider>
            <div className="App">
              <Router>
                <ToastContainer theme={theme === 'light' ? 'light' : 'dark'}
                  style={{ zIndex: 99999 }} />
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

                  <Route path='/search' element={
                    <ProtectedRoute><Search /></ProtectedRoute>
                  }></Route>

                </Routes>
              </Router>
            </div>
          </UserProvider>
        </MenuProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;
