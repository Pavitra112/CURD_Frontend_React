import { Navigate, RouterProvider } from 'react-router-dom';

// project import
import router from 'routes';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  // var isLoggedIn = useSelector((state) => state?.persist.isLoggedIn);
  // if (!isLoggedIn && window.location.pathname !== "/free/login") {
  //   window.location.href = "/free/login";
  //   // return <Navigate to="/free/login" />;
  // }
  const isLoggedIn = useSelector((state) => state?.persist.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn && window.location.pathname !== "/free/login") {
      window.location.href = "/free/login";
    }
  }, [isLoggedIn]);
  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}

// import { useEffect } from 'react';
// import { RouterProvider } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { logoutSuccess } from 'contexts/auth-reducer/actions';

// import router from 'routes';
// import ThemeCustomization from 'themes';
// import ScrollTop from 'components/ScrollTop';
// const useLogoutListener = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const handleLogoutEvent = (event) => {
//       if (event.data === 'logout') {
//         dispatch(logoutSuccess());
//       }
//     };

//     const logoutChannel = new BroadcastChannel('logout_channel');
//     logoutChannel.addEventListener('message', handleLogoutEvent);

//     return () => {
//       logoutChannel.removeEventListener('message', handleLogoutEvent);
//       logoutChannel.close();
//     };
//   }, [dispatch]);

//   return null;
// };
// export default function App() {
//   useLogoutListener();

//   return (
//     <ThemeCustomization>
//       <ScrollTop>
//         <RouterProvider router={router} />
//       </ScrollTop>
//     </ThemeCustomization>
//   );
// }
