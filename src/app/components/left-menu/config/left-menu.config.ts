import { MenuItem } from 'src/app/components/left-menu/models/menu-item';

export namespace LeftMenuConfig {
  export const MENU_ITEMS: MenuItem[] = [
    {
      title: 'Statistic',
      url: 'statistic',
      icon: 'statistic',
    },
    {
      title: 'Users',
      url: 'users',
      icon: 'users',
      subitems: [
        {
          title: 'User List',
          url: 'list',
        },
        {
          title: 'User Edit',
          url: 'edit',
        },
        {
          title: 'Roles and Permissions',
          url: 'roles-permissions',
        },
        {
          title: 'Settings',
          url: 'settings',
        },
      ],
    },
  ];
}