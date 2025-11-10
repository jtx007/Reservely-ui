export interface RestaurantCreate {
  name: string;
  description: string;
  open: number;
  close: number;
}

export interface RestaurantResponse extends RestaurantCreate {
  id: number;
}

export interface RestaurantUpdate {
  name?: string;
  description?: string;
  open?: number;
  close?: number;
}
