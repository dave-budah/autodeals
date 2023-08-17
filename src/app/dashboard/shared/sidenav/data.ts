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
    label: 'My Uploads',
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
    routerLink: '/dashboard/roles',
    icon: 'bi bi-person-fill-lock',
    label: 'Roles'
  },
  {
    routerLink: '/dashboard/subscription',
    icon: 'bi bi-credit-card',
    label: 'Subscriptions'
  },
  {
    routerLink: 'dashboard/categories',
    icon: 'bi bi-grid',
    label: 'Categories',
    expanded: false,
    items: [
      {
      routerLink: 'categories/makes',
      label: 'Car Makes',
      },
      {
       routerLink: 'categories/models',
       label: 'Car Models',
      },
      ]
    },
   {
    routerLink: '/dashboard/pricing',
    icon: 'bi bi-cash-coin',
    label: 'Pricing'
  },
];
