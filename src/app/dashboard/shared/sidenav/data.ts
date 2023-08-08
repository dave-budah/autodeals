import {INavbarData} from "./helper";

export const navbarData: INavbarData[] = [
  {
    routerLink: '/dashboard',
    icon: 'bi bi-grid-1x2',
    label: 'Dashboard'
  },
  {
    routerLink: 'dashboard/products',
    icon: 'bi bi-collection',
    label: 'Products',
    expanded: false,
    items: [
      {
      routerLink: 'products/new',
      label: 'New Vehicles',
      },
      {
       routerLink: 'products/used',
       label: 'Used Vehicles',
      },
      {
       routerLink: 'products/spares',
       label: 'Auto Spares',
      },
      ]
    },
  {
    routerLink: '/dashboard/users',
    icon: 'bi bi-people',
    label: 'Users'
  },
  {
    routerLink: '/dashboard/subscription',
    icon: 'bi bi-credit-card',
    label: 'Subscription'
  },
];
