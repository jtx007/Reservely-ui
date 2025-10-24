import { userService } from './handlers';
import type { UserCreate, UserUpdate, UserLogin } from '@/types';

export const createUserMutation = {
  mutationKey: ['create-user'],
  mutationFn: (user: UserCreate) => userService.createUser(user),
};

export const editUserMutation = {
  mutationKey: ['update-user'],
  mutationFn: (id: number, user: UserUpdate) =>
    userService.updateUser(id, user),
};

export const loginUserMutation = {
  mutationKey: ['login-user'],
  mutationFn: (user: UserLogin) => userService.loginUser(user),
};

export const getCurrentUserQuery = (token: string) => ({
  queryKey: ['get-current-user', token],
  queryFn: () => userService.getCurrentUser(token),
  enabled: !!token,
});
