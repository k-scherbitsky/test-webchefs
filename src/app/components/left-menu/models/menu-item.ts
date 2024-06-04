export interface MenuItem {
  title: string;
  url: string;
  icon?: string;
  subitems?: MenuItem[];
}