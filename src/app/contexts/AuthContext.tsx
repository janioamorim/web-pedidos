"use client";
import { createContext, useState, useEffect } from "react";
import { login as loginService } from "../services/authService";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: string | null;
  token: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const tokenStorage = localStorage.getItem("token");
    const profileName = localStorage.getItem("profileName");
    if (tokenStorage) {
      setUser(profileName);
    }else{
      router.push("/auth/login");
    }
  }, [token]);

  const login = async (email: string, password: string) => {
    const { token, profile } = await loginService(email, password);
    setToken(token);
    setUser(profile.name);
    localStorage.setItem("token", token);
    localStorage.setItem("profileName", profile.name);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    router.push("/auth/login");
  };
  

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

  
};

export { AuthContext };

