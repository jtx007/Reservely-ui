import { useEffect } from 'react';
import { FormCard } from '@/components';
import { loginFormSchema } from '@/lib/formSchemas';
import { bar, date } from '../assets';

function Login() {
  const footerLink = { url: '/signup', text: 'New User? Sign Up Here' };

  // Prefetch images without delaying rendering
  useEffect(() => {
    const imagesToPrefetch = [bar, date]; // Local image imports
    imagesToPrefetch.forEach((src) => {
      const img = new Image();
      img.src = src; // This will prefetch the image
    });
  });
  return (
    <div className='flex h-full w-full'>
      <div className='flex justify-center-safe items-center-safe w-1/2'>
        <FormCard
          title='Login'
          schema={loginFormSchema}
          description='Login to book restaurants'
          footerUrl={footerLink}
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
