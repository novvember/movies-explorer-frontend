import React from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';
import Preloader from '../../movies/Preloader/Preloader';

function ProtectedRoute({ children, isLoading }) {
  const currentUser = React.useContext(CurrentUserContext);

  if (isLoading) return <Preloader />;
  if (!currentUser) return <Navigate to="/" />;
  return children;
}

export default ProtectedRoute;
