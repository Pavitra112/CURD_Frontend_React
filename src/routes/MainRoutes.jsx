import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import { PrivateRoute } from './PrivateAuthRoute';
import PostTable from 'pages/posts/PostTable';
import PostForm from 'pages/posts/PostForm';
import UpdatePostForm from 'pages/posts/UpdatePostForm';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    {
      path: '/',
      element: <PrivateRoute><DashboardDefault /></PrivateRoute>
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <PrivateRoute><DashboardDefault /></PrivateRoute>
        }
      ]
    },
    {
      path: 'sample-page',
      element: <PrivateRoute><SamplePage /></PrivateRoute>
    },
    {
      path: 'shadow',
      element: <PrivateRoute><Shadow /></PrivateRoute>
    },
    {
      path: 'typography',
      element: <PrivateRoute><Typography /></PrivateRoute>
    },
    {
      path: 'post',
      element: <PrivateRoute><PostTable /></PrivateRoute>
    },
    {
      path: 'postform',
      element: <PrivateRoute><PostForm /></PrivateRoute>
    },
    {
      path: 'updatepostform/:id',
      element: <PrivateRoute><UpdatePostForm /></PrivateRoute>
    }
  ]
};

export default MainRoutes;
