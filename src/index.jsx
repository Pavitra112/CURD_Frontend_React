// import React from 'react';
// import ReactDOM from 'react-dom/client';

// // scroll bar
// import 'simplebar-react/dist/simplebar.min.css';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// // google-fonts
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/700.css';

// import '@fontsource/inter/400.css';
// import '@fontsource/inter/500.css';
// import '@fontsource/inter/600.css';
// import '@fontsource/inter/700.css';

// import '@fontsource/poppins/400.css';
// import '@fontsource/poppins/500.css';
// import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/700.css';

// import '@fontsource/public-sans/400.css';
// import '@fontsource/public-sans/500.css';
// import '@fontsource/public-sans/600.css';
// import '@fontsource/public-sans/700.css';

// // project import
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from 'contexts/auth-reducer/store';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// // ==============================|| MAIN - REACT DOM RENDER ||============================== //

// root.render(<App />);
// root.render(
//     <React.StrictMode>
//         <Provider store={store}>
//             {/* <PersistGate loading={null} persistor={persistor}> */}
//             <App />
//             {/* <ToastContainer toastClassName="dark:bg-darkmode-800 dark:text-slate-500" /> */}
//             {/* </PersistGate> */}
//         </Provider>
//     </React.StrictMode>
// );

// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';

// scroll bar
import 'simplebar-react/dist/simplebar.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// google-fonts
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/700.css';

import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';

import '@fontsource/public-sans/400.css';
import '@fontsource/public-sans/500.css';
import '@fontsource/public-sans/600.css';
import '@fontsource/public-sans/700.css';

// project import
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from 'contexts/auth-reducer/store';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));

// ==============================|| MAIN - REACT DOM RENDER ||============================== //

root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <App />
            <ToastContainer toastClassName="dark:bg-darkmode-800 dark:text-slate-500" />
        </PersistGate>
    </Provider>
);
// ReactDOM.render(
//     <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//             <App />
//         </PersistGate>
//     </Provider>,
//     document.getElementById('root')
// );
reportWebVitals();
