export interface UserCreate extends UserLogin {
  email: string;
}

export interface UserLogin {
  username: string;
  password: string;
}

export interface UserUpdate {
  username?: string;
  email?: string;
  password?: string;
}

interface UserLoginResponse {
  access_token: string;
  token_type: 'bearer';
}
export interface UserResponse {
  username: string;
  email: string;
  id: number;
}

const API_URL = import.meta.env.VITE_BASE_API_URL;
export const userService = {
  getCurrentUser: async (token: string): Promise<UserResponse> => {
    const response = await fetch(`${API_URL}/users/current`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    const data: UserResponse = await response.json();
    return data;
  },

  createUser: async (user: UserCreate): Promise<UserResponse> => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    const data: UserResponse = await response.json();
    return data;
  },
  loginUser: async (user: UserLogin): Promise<UserLoginResponse> => {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    const data: UserLoginResponse = await response.json();
    return data;
  },
  updateUser: async (id: number, user: UserUpdate): Promise<UserResponse> => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    const data: UserResponse = await response.json();
    return data;
  },
  deleteUser: async (id: number) => {
    const response = await fetch(`${API_URL}/users`, {
      method: 'DELETE',
      body: JSON.stringify(id),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to fetch current user');
    }

    const data: UserResponse = await response.json();
    return data;
  },
};
