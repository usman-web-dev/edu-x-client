export type AnyObject = {
  [key: string]: any;
};

export type TableHeader = {
  id: string;
  title: string;
  width?: string;
  dir?: 'left' | 'center' | 'right';
};
