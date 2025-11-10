import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router';
import { ChevronLeft } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { createRestaurantMutation } from '@/services/restuarants/queries';
import type { RestaurantResponse, RestaurantCreate } from '@/types';
import { Form } from '@/components';
import { addRestaurantFormFields } from '@/lib/fields';
import { FormFooter } from '@/components/FormFooter';
import { errorToast } from '@/lib/utils';
import { ToastMessage } from '@/components/ToastMessage';
export const AddRestaurant = () => {
  const navigate = useNavigate();
  const { mutateAsync, isPending, isError } = useMutation({
    ...createRestaurantMutation,
    onSuccess: () => navigate('/restaurants'),
    onError: (error) =>
      errorToast(
        'Create Restaurant Error',
        <ToastMessage message={error.message} />,
      ),
  });

  return (
    <div className='flex flex-col w-1/2 gap-4'>
      <div>
        <Button variant={'link'}>
          <ChevronLeft />
          <Link to='/restaurants'>View All Restaurants</Link>
        </Button>
        <h1>Add your restaurant here</h1>
      </div>
      <div className='flex flex-col w-full gap-4'>
        <Form<RestaurantResponse, RestaurantCreate>
          title='Fill out restaurant details'
          fields={addRestaurantFormFields}
          mutateFn={(values) => mutateAsync(values)}
          isError={isError}
          isPending={isPending}
        />
      </div>
      <FormFooter isPending={isPending} title={'Fill out restaurant details'} />
    </div>
  );
};
