import { Navigate, useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { getRestaurantQuery } from '@/services/restuarants/queries';
import { Skeleton } from '@/components/ui/skeleton';

export const RestaurantView = () => {
  const { restaurantId } = useParams();

  const { data, isLoading, isError } = useQuery(
    getRestaurantQuery(restaurantId),
  );
  if (!restaurantId) {
    return <Navigate to='/restaurants' replace />;
  }

  if (isLoading) return <Skeleton />;

  if (isError || !data) return <p>Failed to load restaurant.</p>;

  return (
    <div className='flex flex-col gap-2'>
      <h1 className='text-2xl font-bold'>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        Hours: {data.open}:00 - {data.close}:00
      </p>
    </div>
  );
};
