import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import { AuthRoute } from './PrivateAuthRoute';
// render - login
const AuthLogin = Loadable(lazy(() => import('pages/authentication/login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/register')));

// ==============================|| AUTH ROUTING ||============================== //

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthRoute><AuthLogin /></AuthRoute>
    },
    {
      path: '/register',
      element: <AuthRoute><AuthRegister /></AuthRoute>
    }
  ]
};

export default LoginRoutes;
