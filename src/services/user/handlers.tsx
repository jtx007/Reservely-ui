export interface UserCreate {
  username: string;
  email: string;
  password: string;
}

export const userService = {
  createUser: async (user: UserCreate) => {
    try {
      const response = await fetch('http://localhost:8000/users', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  },
};
