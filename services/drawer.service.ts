class DrawerService {
  mode = true;

  links = [
    { title: 'Dashboard', icon: 'mdi-home-variant-outline', selectedIcon: 'mdi-home-variant', link: 'dashboard' },
    { title: 'Test', icon: 'mdi-account-outline', selectedIcon: 'mdi-account', link: 'test' }
  ];
}

export const drawerSrv = new DrawerService();
