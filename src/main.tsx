import React, { useContext, createContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from 'react-query'
const queryClient = new QueryClient()

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Routes,
  Route
} from 'react-router-dom';

import router from './router.jsx'

const initialState = {
  user:{
    name:'alexmochu',
  },
  isAuthenticated: false
}

const useLocalStorage = (state) => {
  const [storedValue, setStoredValue] = useState(
      state
    );
  
  if(!localStorage.getItem('store')){
    localStorage.setItem('store', JSON.stringify(state))
  }

  const setValue = async (value) => {
    const current = localStorage.getItem('store')
    try {
    // Allow value to be a function so we have same API as useState
      // const valueToStore =
      // value instanceof Function ? value(storedValue) : {...storedValue};
      // Save to local storage

      localStorage.setItem('store', JSON.stringify(value));
      // Save state
      setStoredValue(value);
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };
  
  return [storedValue, setValue]
}

const CurrentUserState = createContext(initialState)

const App = () => {  
  const [user, setUser] = useState(initialState)
  const [value, setValue] = useLocalStorage(initialState);

  useEffect(() => {
    // localStorage.setItem('stote', JSON.stringify(initialState))
    setUser(value)
  }, [value])
  return(
    <CurrentUserState.Provider
      value={{
        value,
        setValue
      }}>
      <QueryClientProvider client={queryClient}>
        {/* <NavBar navigation={Navs} /> */}
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
