import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type GlobalContextType = {
  pricingMode: "monthly" | "yearly";
  togglePricingMode: () => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {


  // 🔹 Pricing mode state
  const [pricingMode, setPricingMode] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const togglePricingMode = () => {
    setPricingMode((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };

  return (
    <GlobalContext.Provider
      value={{ pricingMode, togglePricingMode }}
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
