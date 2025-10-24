import { useAuth } from '@/context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
export const Profile = () => {
  const navigate = useNavigate();
  const { isLoggedIn, currentUser } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);
  return <h1>Welcome {currentUser?.username}!</h1>;
};
