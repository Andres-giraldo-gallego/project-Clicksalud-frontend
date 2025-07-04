import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children, isLogin }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/signin');
    }
  }, [isLogin, navigate]);

  return isLogin ? children : null;
}

export default ProtectedRoute;
