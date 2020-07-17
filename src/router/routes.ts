import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import NewAccount from '../views/NewAccount.vue';

export default [
  {
    path: <string> '/login',
    name: <string> 'Login',
    component: Login,
    meta: <object> {
      name: <object> {
        fr: <string> 'Connexion',
        en: <string> 'Connection',
      },
      menu: false,
      auth: false,
    },
  },
  {
    path: <string> '/newaccount',
    name: <string> 'New Account',
    component: NewAccount,
    meta: <object> {
      name: <object> {
        fr: <string> 'Nouveau compte',
        en: <string> 'New Account',
      },
      menu: false,
      auth: false,
    },
  },
  {
    path: <string> '',
    name: <string> 'Dashboard',
    component: Dashboard,
    meta: <object> {
      name: <object> {
        fr: <string> 'Tableau de bord',
        en: <string> 'Dashboard',
      },
      menu: true,
      auth: true,
    },
  },
  {
    path: <string> '/client',
    name: <string> 'Client',
    component: Dashboard,
    meta: <object> {
      name: <object> {
        fr: <string> 'Clients',
        en: <string> 'Customers',
      },
      menu: true,
      auth: true,
    },
  },
];
