import { createContext, useContext } from 'react';

const MyAppContext = createContext({ message: 'Hello Context' });

export const useMyAppContext = () => useContext(MyAppContext);

export function MyAppProvider({ children }: { children: React.ReactNode }) {
  return (
    <MyAppContext.Provider value={{ message: 'Hello Context' }}>
      {children}
    </MyAppContext.Provider>
  );
}
