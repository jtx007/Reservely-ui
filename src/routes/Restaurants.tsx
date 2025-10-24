import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router';
export const Restaurants = () => {
  return (
    <div className='flex items-center w-full'>
      <Button variant='link'>
        <ChevronLeft />
        <Link to='/restaurants/add'>Add a Restaurant</Link>
      </Button>
      {/* restaurant-card-container */}
      <div className='flex-1 text-center'>View all restaurants</div>
    </div>
  );
};
