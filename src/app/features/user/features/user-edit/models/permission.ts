export interface Permission {
  id: number;
  objectName: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
}