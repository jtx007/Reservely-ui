export type InputTypeEnum =
  | 'text'
  | 'number'
  | 'password'
  | 'textArea'
  | 'email';

type MinMax = {
  value: number;
  message: string;
};

export interface FormField<TVariables extends FieldValues> {
  label: Path<TVariables>; // <-- use Path here instead of keyof
  type: InputTypeEnum;
  defaultValue: TVariables[Path<TVariables>];
  min?: MinMax;
  max?: MinMax;
  minLength?: MinMax;
  maxLength?: MinMax;
  required: boolean;
}
import type { RestaurantCreate, UserCreate, UserLogin } from '@/types';
import type { FieldValues, Path } from 'react-hook-form';

export const signUpFormFields: FormField<UserCreate>[] = [
  {
    label: 'username',
    type: 'text',
    defaultValue: '',
    required: true,
    minLength: { value: 3, message: 'username should be at least 3 chars' },
    maxLength: {
      value: 16,
      message: 'username cannot be more than 16 chars',
    },
  },
  { label: 'email', type: 'email', defaultValue: '', required: true },
  {
    label: 'password',
    type: 'password',
    defaultValue: '',
    required: true,
    minLength: {
      value: 7,
      message: 'password should be minimum 7 characters',
    },
    maxLength: {
      value: 16,
      message: 'password should not exceed 16 characters',
    },
  },
];

export const loginFormFields: FormField<UserLogin>[] = [
  {
    label: 'username',
    type: 'text',
    defaultValue: '',
    required: true,
  },
  {
    label: 'password',
    type: 'password',
    defaultValue: '',
    required: true,
  },
];

export const addRestaurantFormFields: FormField<RestaurantCreate>[] = [
  {
    label: 'name',
    type: 'text',
    defaultValue: '',
    required: true,
    minLength: { value: 3, message: 'name should have at least 3 chars' },
    maxLength: { value: 48, message: 'name cannot be longer than 48 chars' },
  },
  {
    label: 'description',
    type: 'textArea',
    defaultValue: '',
    required: true,
    minLength: { value: 50, message: 'desc needs to be at least 50 chars' },
    maxLength: { value: 200, message: 'desc cannot be longer than 200 chars' },
  },
  {
    label: 'open',
    type: 'number',
    defaultValue: 0,
    required: true,
    min: { value: 0, message: 'Time must be at or greater than 0' },
    max: { value: 24, message: 'Time must be at or less than 24' },
  },
  {
    label: 'close',
    type: 'number',
    defaultValue: 0,
    required: true,
    min: { value: 0, message: 'Time must be at or greater than 0' },
    max: { value: 24, message: 'Time must be at or less than 24' },
  },
];
