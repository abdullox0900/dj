export type PropsWithClassName<P = unknown> = P & {
  className?: string;
};

export type PropsWithLocale<P = unknown> = P & {
  locale: string;
};

export type Kitchen = {
  id: number;
  facadeMaterial: string;
  tableTopMaterial: string;
  color: string;
  style: string;
  type: string;
  images: string[];
  name: string;
  price: number;
  discount?: number;
};

export type Article = {
  id: number;
  images: string[];
  title: string;
  description: string;
  content: string;
  date: string;
};
