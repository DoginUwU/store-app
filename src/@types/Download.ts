interface IDownload {
  id: string;
  name: string;
  url: string;
  size: number;
  progress: number;
  status: 'pending' | 'paused' | 'downloading' | 'completed' | 'failed';
  error?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type { IDownload };
