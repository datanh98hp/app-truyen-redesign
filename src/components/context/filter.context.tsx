"use client";
import { createContext, useContext, useState } from "react";

type Filter = {
  category: string;
  status: string;
  country: string;
  sortBy: string;
};
const initialFilter = {
  status: "",
  country: "",
  category: "",
  sortBy: "latest",
};

export const FilterContext = createContext({
  filter: initialFilter,
  updateFilter: (newFilter: Filter) => {},
  resetFilter: () => {},
});

export default function FilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [filter, setFilter] = useState(initialFilter);

  const resetFilter = () => {
    setFilter(initialFilter);
  };
  const updateFilter = (newFilter: Filter) => {
    setFilter({ ...filter, ...newFilter });
  };
  return (
    <FilterContext.Provider value={{ filter, updateFilter, resetFilter }}>
      {children}
    </FilterContext.Provider>
  );
}
export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};
