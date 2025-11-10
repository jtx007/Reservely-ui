import { useEffect } from 'react';
import { FormCard } from '@/components';
import { useMutation } from '@tanstack/react-query';
import { bar, date } from '../assets';
import { useNavigate } from 'react-router';
import { loginFormFields } from '@/lib/fields';
import { loginUserMutation } from '@/services';
import { useAuth } from '@/context';
import type { UserLogin, UserLoginResponse } from '@/types';
import { errorToast, successToast } from '@/lib/utils';
import { ToastMessage } from '@/components/ToastMessage';
function Login() {
  const footerLink = { url: '/signup', text: 'New User? Sign Up Here' };

  // Prefetch images without delaying rendering
  const navigate = useNavigate();
  const { setTokenLogin, isLoggedIn, currentUser } = useAuth();
  const { mutateAsync, isPending, isError } = useMutation<
    UserLoginResponse, // success type
    Error, // error type (or custom error)
    UserLogin // variables type (your form values)
  >({
    ...loginUserMutation,
    onSuccess: (data) => {
      setTokenLogin(data.access_token);
      successToast(
        'Login Success',
        <ToastMessage message='Login Successful' />,
      );
      navigate(`/profile/${currentUser?.username}`);
    },
    onError: (error) =>
      errorToast('Login Error', <ToastMessage message={error.message} />),
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
        <FormCard<UserLoginResponse, UserLogin>
          fields={loginFormFields}
          title='Login'
          description='Login to book restaurants'
          footerUrl={footerLink}
          mutateFn={(values) => mutateAsync(values)}
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
