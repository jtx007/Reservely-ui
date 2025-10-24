import { useNavigate, useParams } from 'react-router';

export const RestaurantView = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();

  if (!restaurantId) {
    navigate('/restaurants');
  }

  return <h1>{restaurantId}</h1>;
};
