import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AuthContextProvider from './context/AuthContext.jsx';
import {routes, Login, Layout} from "./navigation/routes.js"
import { ProtectedRoutes } from './components/ProtectedRoutes.jsx';
import { NewtonsCradle } from '@uiball/loaders'
import { Container } from '@mui/material';

const App = () => {
  return (
    <Suspense fallback = {
        <Container align= "center">
          <NewtonsCradle 
            size={40}
            speed={1.4} 
            color="black" 
          />
        </Container>}
    >
      <AuthContextProvider>
        <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route element={<Layout />}>
              {
                routes.map(({ id, path, Element }) => (
                  <Route key={id} path={path} element={<Element />} />
                ))
              }
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </Suspense>
    
  )
}

export default App