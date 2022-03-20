class DrawerService {
  mode = true;

  links = [
    { title: 'Dashboard', icon: 'mdi-home-variant-outline', selectedIcon: 'mdi-home-variant', link: 'dashboard' }
  ];
}

export const drawerSrv = new DrawerService();
