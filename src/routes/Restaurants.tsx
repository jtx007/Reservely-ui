import { RestaurantCardContainer } from '@/components/RestaurantCardContainer';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';

export const Restaurants = () => {
  return (
    <div className='flex flex-col items-center w-full'>
      <Button className='mr-auto' variant='link'>
        <ChevronLeft />
        <Link to='/restaurants/add'>Add a Restaurant</Link>
      </Button>
      <RestaurantCardContainer />
    </div>
  );
};
