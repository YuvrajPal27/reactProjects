import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { User } from "firebase/auth";
import { getAuth, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app  from "../config/firebase";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Get the Auth instance
  const auth = getAuth(app);

  // 🔹 Keep user logged in across refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  // Google Login
  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  // Logout
  const logout = async () => {
    await signOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, loginWithGoogle, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for easy use
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
