import os from 'os';
import { download, Progress } from 'electron-dl'
import { mainWindow } from './main';
import { IDownload } from '../src/@types/Download';

const downloads: IDownload[] = []

const createDownload = (application: IDownload) => {
    downloads.push(application);

    if (!mainWindow) return;

    download(mainWindow, application.url, {
        directory: os.homedir() + '/Downloads',
        onProgress: (progress) => updateProgress(application.id, progress),
        onStarted: (item) => {
            application.size = item.getTotalBytes();
            application.status = 'downloading';
        }
    });

    mainWindow.webContents.send('download-update', application)
}

const updateProgress = (id: string, progress: Progress) => {
  const application = downloads.find(download => download.id === id)
  
  if (!mainWindow) return
  if (!application) return

  application.progress = (progress.percent * 100);

  mainWindow.webContents.send('download-update', application)
}

export { createDownload };