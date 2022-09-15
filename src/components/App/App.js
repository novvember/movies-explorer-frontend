import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from '../landing/Landing/Landing';
import Movies from '../movies/Movies/Movies';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';
import './App.css';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';
import React from 'react';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import mainApi from '../../utils/MainApi';
import Profile from '../user/Profile/Profile';
import ProtectedRoute from '../user/ProtectedRoute/ProtectedRoute';

function App() {
  const [currentUser, setCurrentUser] = React.useState(null);

  const navigate = useNavigate();

  // Авторизация при открытии страницы по сохраненному логину
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi
        .checkToken(token)
        .then((res) => {
          mainApi.setToken(token);
          setCurrentUser(res);
        })
        .catch((err) => {
          localStorage.removeItem('token');
          localStorage.removeItem('searchText');
          localStorage.removeItem('areShortiesSeleted');
          localStorage.removeItem('foundMovies');
          setCurrentUser(null);
          console.error(err);
        });
    }
  }, []);

  function handleLogin({ token }) {
    localStorage.setItem('token', token);
    mainApi.setToken(token);
    setCurrentUser({});
    navigate('/movies');
  }

  function handleLogOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('searchText');
    localStorage.removeItem('areShortiesSeleted');
    localStorage.removeItem('foundMovies');
    setCurrentUser(null);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="content">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <ProtectedRoute>
                <SavedMovies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile onLogout={handleLogOut} />
              </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Register onLogin={handleLogin} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
