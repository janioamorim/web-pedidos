export interface LoginResponse {
    profile: {
        name: string;
    },
      token: string;
      email: string;
      id: string;
    }