interface IApplication {
  _id: string;
  name: string;
  description: string;
  url: string;
  runSetup: string;
  icon: string;
  downloads: number;
  stars: number;
  createdAt: string;
  updatedAt: string;
}

export type { IApplication as Application };
