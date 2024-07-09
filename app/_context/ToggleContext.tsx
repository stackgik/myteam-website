'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface IContextValue {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

// create context
const ToggleContext = createContext<IContextValue | undefined>(undefined);

// create the provider
const ToggleProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};

// create a function that consumes the context values
const useToggle = () => {
  const context = useContext(ToggleContext);

  if (context === undefined) {
    throw new Error('ToggleContext was used outside the ToggleProvider');
  }

  return context;
};

export { ToggleProvider, useToggle };
