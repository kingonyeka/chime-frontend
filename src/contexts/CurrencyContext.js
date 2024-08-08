import React, { createContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState("United Kingdom");

  useEffect(() => {
    //  client wants only USD now after implementation has been done and the country set to United Kingdom,
    
    setCurrency("USD");
    setCountry("United Kingdom");

    localStorage.setItem("country", "United Kingdom");

    setLoading(false);
  }, []);

  return (
    <CurrencyContext.Provider value={{ currency, loading, country }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => React.useContext(CurrencyContext);
