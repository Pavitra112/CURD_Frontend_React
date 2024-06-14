// action - state management
import { REGISTER, LOGIN, LOGOUT } from './actions';

// initial state
export const initialState = {
  isLoggedIn: false,
  isInitialized: false,
  user: null
};

const reloadChannel = new BroadcastChannel('logout');

// ==============================|| AUTH REDUCER ||============================== //

reloadChannel.onmessage = (event) => {
  if (event.data === 'logout') {
    window.location.reload();
  }
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER: {
      const user = action.payload;
      return {
        ...state,
        user
      };
    }
    case LOGIN: {
      const user = action.payload;
      // console.log(action);
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        user
      };
    }
    case LOGOUT: {
      reloadChannel.postMessage('logout');
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

export default auth;
