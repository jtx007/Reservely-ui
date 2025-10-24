export interface RestaurantCreate {
  name: string;
  desc: string;
  open: number;
  close: number;
}

export interface RestaurantResponse extends RestaurantCreate {
  id: number;
}

export interface RestaurantUpdate {
  name?: string;
  desc?: string;
  open?: number;
  close?: number;
}
