import { queue, waiter } from '@/assets';
import { FormCard } from '@/components';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUserMutation } from '@/services';
import { useNavigate } from 'react-router';
import type { UserCreate, UserResponse } from '@/types';
import { signUpFormFields } from '@/lib/fields';
import { errorToast, successToast } from '@/lib/utils';
import { ToastMessage } from '@/components/ToastMessage';
import { useAuth } from '@/context';
export const SignUp = () => {
  const footerLink = { url: '/login', text: 'Already a user? Login Here' };
  const navigate = useNavigate();
  const { isLoggedIn, currentUser } = useAuth();
  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/profile/${currentUser?.username}`);
    }
    const imagesToPrefetch = [queue, waiter]; // Local image imports
    imagesToPrefetch.forEach((src) => {
      const img = new Image();
      img.src = src; // This will prefetch the image
    });
  });
  const { mutateAsync, isPending, isError } = useMutation({
    ...createUserMutation,
    onSuccess: () => {
      successToast('Signed Up', <ToastMessage message='Sign Up Successful' />);
      navigate('/login');
    },
    onError: (error) =>
      errorToast('Sign Up error', <ToastMessage message={error.message} />),
  });
  return (
    <div className='flex h-full w-full'>
      <div className='flex flex-col justify-center-safe items-center-safe w-1/2'>
        <img className='h-1/2 ' src={queue} alt='queue' />
        <img className='h-1/2' src={waiter} alt='waiter' />
      </div>
      <div className='flex justify-center-safe items-center-safe w-1/2'>
        <FormCard<UserResponse, UserCreate>
          title='Sign Up'
          fields={signUpFormFields}
          description='Sign Up to book restaurants'
          footerUrl={footerLink}
          mutateFn={mutateAsync}
          isPending={isPending}
          isError={isError}
        />
      </div>
    </div>
  );
};
