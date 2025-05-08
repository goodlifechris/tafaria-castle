export interface LeisureActivity {
  id: string;
  name: string;
  description: string;
  priority: number;
  image: {
    id: string;
    url: string;
    width: number;
    height: number;
    filesize: number;
    extension: string;
  };
}
