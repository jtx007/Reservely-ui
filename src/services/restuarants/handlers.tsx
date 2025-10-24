const API_URL = import.meta.env.VITE_BASE_API_URL;
import type {
  RestaurantUpdate,
  RestaurantCreate,
  RestaurantResponse,
} from '@/types';

export const restaurantService = {
  getRestaurants: async (): Promise<RestaurantResponse[]> => {
    const response = await fetch(`${API_URL}/restaurants`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch restaurants');
    }

    const data: RestaurantResponse[] = await response.json();
    return data;
  },
  getRestaurant: async (restaurantId: number): Promise<RestaurantResponse> => {
    const response = await fetch(`${API_URL}/restaurants/${restaurantId}`);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch restaurant');
    }
    const data: RestaurantResponse = await response.json();
    return data;
  },
  createRestaurant: async (
    restaurant: RestaurantCreate,
  ): Promise<RestaurantResponse> => {
    const response = await fetch(`${API_URL}/restaurants`, {
      method: 'POST',
      body: JSON.stringify(restaurant),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to create restaurant');
    }
    const data: RestaurantResponse = await response.json();
    return data;
  },
  updateRestaurant: async (
    restaurant_id: number,
    restaurantUpdate: RestaurantUpdate,
  ): Promise<RestaurantResponse> => {
    const response = await fetch(`${API_URL}/restaurants/${restaurant_id}`, {
      method: 'PUT',
      body: JSON.stringify(restaurantUpdate),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to update restaurant');
    }
    const data: RestaurantResponse = await response.json();
    return data;
  },
  deleteRestaurant: async (restaurantId: number) => {
    const response = await fetch(`${API_URL}/restaurants/${restaurantId}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to delete restaurant');
    }

    const data: RestaurantResponse = await response.json();
    return data;
  },
};
