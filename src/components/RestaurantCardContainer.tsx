import { useQuery } from '@tanstack/react-query';
import { getRestaurantsQuery } from '@/services/restuarants/queries';
import { errorToast } from '@/lib/utils';
import { ToastMessage } from './ToastMessage';
import { Skeleton } from './ui/skeleton';
import { RestaurantContentCard } from './ResaurantContentCard';

export const RestaurantCardContainer = () => {
  const { data, isLoading, isError, error } = useQuery(getRestaurantsQuery());

  if (isError) {
    return errorToast('Fetch Error', <ToastMessage message={error.message} />);
  }

  const restaurants = data?.map((restaurant) => (
    <RestaurantContentCard key={restaurant.id} {...restaurant} />
  ));

  return (
    <div className='flex flex-wrap'>
      {isLoading && <Skeleton />} {data && restaurants}{' '}
    </div>
  );
};
