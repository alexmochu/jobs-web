import { Navigate } from 'react-router-dom';
// ...

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children }) => {

  // eslint-disable-next-line no-constant-condition
  if (!true) {
    return <Navigate to="/login" />;
  }

  return (
    children
  );
};

export default ProtectedRoute
