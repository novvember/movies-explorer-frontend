import { Route, Routes } from 'react-router-dom';
import Landing from '../landing/Landing/Landing';
import Movies from '../movies/Movies/Movies';
import ProfilePage from '../user/ProfilePage/ProfilePage';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import Page404 from '../Page404/Page404';
import './App.css';
import Register from '../user/Register/Register';
import Login from '../user/Login/Login';

function App() {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
