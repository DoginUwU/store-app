/* eslint-disable react/prop-types */
import {
  createContext, useCallback, useContext, useEffect, useState,
} from 'react';
import { Application } from '../@types/Application';
import { IDownload } from '../@types/Download';

interface IDownloadContext {
  downloads: IDownload[];
  download: (application: Application) => void;
  getDownloadById: (id: string) => IDownload | undefined;
}

const DownloadContext = createContext<IDownloadContext | null>(null);

const DownloadProvider: React.FC = function ({ children }) {
  const [downloads, setDownloads] = useState<IDownload[]>([]);

  const download = useCallback((application: Application) => {
    if (!application) {
      alert('Application not found');
      return;
    }

    const newDownload: IDownload = {
      id: application._id,
      name: application.name,
      url: application.url,
      progress: 0,
      size: 0,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setDownloads([...downloads, newDownload]);
  }, []);

  const getDownloadById = useCallback((id: string) => { 
    return downloads.find((download) => download.id === id);
  }, []);

  useEffect(() => {
    window.Main.on('download-update', (app: IDownload) => {
      console.log(app)

      setDownloads(
        downloads.map(download => {
          if (download.id === app.id) {
            return app
          }
          return download
        })
      )
    })
  }, []);

  useEffect(() => {
    downloads.filter((d) => d.status === 'pending').forEach((d) => {
      window.Main.sendMessage('download', JSON.stringify(d));
    });
  }, [downloads]);

  return (
    <DownloadContext.Provider value={{ download, getDownloadById, downloads }}>
      {children}
    </DownloadContext.Provider>
  )
};

const useDownload = (): IDownloadContext => {
  const context = useContext(DownloadContext);

  if (!context) {
    throw new Error('useDownload must be used within a DownloadProvider');
  }
  return context;
};

export { DownloadProvider, useDownload };
