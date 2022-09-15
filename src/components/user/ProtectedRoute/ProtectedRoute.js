import React from 'react';
import { Navigate } from 'react-router-dom';
import CurrentUserContext from '../../../contexts/CurrentUserContext';

function ProtectedRoute({ children }) {
  const currentUser = React.useContext(CurrentUserContext);

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
