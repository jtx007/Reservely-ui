import { userService } from './handlers';
import type { UserCreate } from './handlers';

export const createUserMutation = {
  mutationKey: ['create-user'],
  mutationFn: (user: UserCreate) => userService.createUser(user),
};
