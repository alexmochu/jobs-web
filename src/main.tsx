import React, { useContext, createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import {
  RouterProvider,
} from 'react-router-dom';

import router from './router.jsx'

const initialState = {
  user:{
    name:'',
  },
  isAuthenticated: false
}

const CurrentUserState = createContext()

const App = () => {  
  const [user, setUser] = useState(()=> {
    const state = localStorage.getItem('store')
    if(state === null){
      return initialState
    } else if(!JSON.parse(state).isAuthenticated){
      return initialState
    } else {
      return JSON.parse(state)
    }
  });

  useEffect(() => {
    const storeState = localStorage.getItem('store');
    if (storeState) {
      setUser(JSON.parse(storeState));
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('store', JSON.stringify(user));
    }
  }, [user, user]);

  return(
    <CurrentUserState.Provider
      value={{
        user,
        setUser
      }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </CurrentUserState.Provider>
  )
}

export function userState() {
  return useContext(CurrentUserState);
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
