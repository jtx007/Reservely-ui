// add 3 mutations and 2 queries

import type { RestaurantCreate, RestaurantUpdate } from '@/types';
import { restaurantService } from './handlers';

export const createRestaurantMutation = {
  mutationKey: ['create-restaurant'],
  mutationFn: (restaurant: RestaurantCreate) =>
    restaurantService.createRestaurant(restaurant),
};

export const updateRestaurantMutaion = {
  mutationKey: ['update-restaurant'],
  mutationFn: (restaurantId: number, updateRestaurant: RestaurantUpdate) =>
    restaurantService.updateRestaurant(restaurantId, updateRestaurant),
};

export const getRestaurantsQuery = () => {
  return {
    queryKey: ['get-all-restaurants'],
    queryFn: () => restaurantService.getRestaurants(),
  };
};

export const getRestaurantQuery = (restaurantId?: string) => {
  return {
    queryKey: ['restaurant', restaurantId],
    queryFn: () => {
      if (!restaurantId) throw new Error('restaurantId is required');
      return restaurantService.getRestaurant(restaurantId);
    },
    enabled: !!restaurantId,
  };
};
export const deleteRestaurantMutation = {
  mutationKey: ['delete-restaurant'],
  mutationFn: (restaurantId: number) =>
    restaurantService.deleteRestaurant(restaurantId),
};
