import { Permission } from 'src/app/features/user/features/user-edit/models/permission';

export namespace TableData {
  export const ROW_DATA: Permission[] = [
    {
      id: 1,
      objectName: 'Script',
      create: true,
      read: true,
      update: true,
      delete: true,
    },
    {
      id: 2,
      objectName: 'Props',
      create: true,
      read: true,
      update: false,
      delete: true,
    },
    {
      id: 3,
      objectName: 'Screens',
      create: true,
      read: false,
      update: true,
      delete: false,
    },
    {
      id: 4,
      objectName: 'Money',
      create: false,
      read: true,
      update: true,
      delete: true,
    },
    {
      id: 5,
      objectName: 'Stunt',
      create: true,
      read: false,
      update: false,
      delete: false,
    },
  ];
}