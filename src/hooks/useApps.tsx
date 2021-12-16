import React, {
  createContext, useCallback, useContext, useState,
} from 'react';
import { Application } from '../@types/Application';
import api from '../services/api';
import { getStoreUrl } from '../utils/backend';

interface IAppContext {
  applications: Application[];
  getApplications: () => void;
  getApplicationById: (id: string) => Application | undefined;
}

const AppContext = createContext<IAppContext | null>(null);

const AppProvider: React.FC = function ({ children }) {
  const [applications, setApplications] = useState<Application[]>([]);

  const getApplications = useCallback(async () => {
    api.get<Application[]>(getStoreUrl()).then((response) => {
      setApplications(response.data);
    });
  }, []);

  const getApplicationById = useCallback(
    (id: string) => applications.find((app) => app._id === id),
    [applications],
  );

  return (
    <AppContext.Provider
      value={{ applications, getApplications, getApplicationById }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useApps = (): IAppContext => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error('useApps must be used within an AppProvider');
  }

  return context;
};

export { AppProvider, useApps };
