import { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type GlobalContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  pricingMode: "monthly" | "yearly";
  togglePricingMode: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // 🔹 Dark mode state
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // get preference from localStorage (or default light)
    const stored = localStorage.getItem("darkMode");
    return stored ? JSON.parse(stored) : false;
  });

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // 🔹 Pricing mode state
  const [pricingMode, setPricingMode] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const togglePricingMode = () => {
    setPricingMode((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <GlobalContext.Provider
      value={{ darkMode, toggleDarkMode, pricingMode, togglePricingMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within GlobalProvider");
  return context;
};
