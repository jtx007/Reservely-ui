import { useEffect } from 'react';
import { FormCard } from '@/components';
import { loginFormSchema } from '@/lib/formSchemas';
import { useMutation } from '@tanstack/react-query';
import { bar, date } from '../assets';
import { useNavigate } from 'react-router';
import { loginUserMutation } from '@/services/user';
import { useAuth } from '@/context';

function Login() {
  const footerLink = { url: '/signup', text: 'New User? Sign Up Here' };

  // Prefetch images without delaying rendering
  const navigate = useNavigate();
  const { setTokenLogin, isLoggedIn, currentUser } = useAuth();
  const { mutateAsync, isPending, isError } = useMutation({
    ...loginUserMutation,
    onSuccess: (data) => {
      setTokenLogin(data.access_token);
      navigate(`/profile/${currentUser?.username}`);
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/profile/${currentUser?.username}`);
    }
    const imagesToPrefetch = [bar, date]; // Local image imports
    imagesToPrefetch.forEach((src) => {
      const img = new Image();
      img.src = src; // This will prefetch the image
    });
  }, [isLoggedIn, navigate, currentUser]);

  return (
    <div className='flex h-full w-full'>
      <div className='flex justify-center-safe items-center-safe w-1/2'>
        <FormCard
          title='Login'
          schema={loginFormSchema}
          description='Login to book restaurants'
          footerUrl={footerLink}
          mutateFn={mutateAsync}
          isPending={isPending}
          isError={isError}
        />
      </div>
      <div className='flex flex-col justify-center-safe items-center-safe w-1/2'>
        <img className='h-1/2 ' src={bar} alt='bar' />
        <img className='h-1/2' src={date} alt='date' />
      </div>
    </div>
  );
}

export default Login;
