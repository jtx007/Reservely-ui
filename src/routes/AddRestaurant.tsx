import { Button } from '@/components/ui/button';
import { Link } from 'react-router';
import { ChevronLeft } from 'lucide-react';
export const AddRestaurant = () => {
  return (
    <>
      <Button variant={'link'}>
        <ChevronLeft />
        <Link to='/restaurants'>View All Restaurants</Link>
      </Button>
      <h1>Add your restaurant here</h1>
      {/* Add form here */}
    </>
  );
};
