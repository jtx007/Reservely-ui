import { queue, waiter } from '@/assets';
import { FormCard } from '@/components';
import { signUpFormSchema } from '@/lib/formSchemas';
import { useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createUserMutation } from '@/services';
import { useNavigate } from 'react-router';
export const SignUp = () => {
  const footerLink = { url: '/login', text: 'Already a user? Login Here' };
  const navigate = useNavigate();
  useEffect(() => {
    const imagesToPrefetch = [queue, waiter]; // Local image imports
    imagesToPrefetch.forEach((src) => {
      const img = new Image();
      img.src = src; // This will prefetch the image
    });
  });
  const { mutateAsync, isPending, isError } = useMutation({
    ...createUserMutation,
    onSuccess: () => navigate('/login'),
  });

  return (
    <div className='flex h-full w-full'>
      <div className='flex flex-col justify-center-safe items-center-safe w-1/2'>
        <img className='h-1/2 ' src={queue} alt='queue' />
        <img className='h-1/2' src={waiter} alt='waiter' />
      </div>
      <div className='flex justify-center-safe items-center-safe w-1/2'>
        <FormCard
          title='Sign Up'
          schema={signUpFormSchema}
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
