import { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { userState } from '../main'

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children , auth}) => {
  const { value } = userState();
  const isAuthenticated = value.isAuthenticated
  // eslint-disable-next-line no-constant-condition
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    children
  );
};

export default ProtectedRoute
