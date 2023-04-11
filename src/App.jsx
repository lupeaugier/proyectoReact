import React, { Suspense } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import GlobalContextProvider from './context/GlobalContext.jsx';
import {routes, Login, Layout} from "./navigation/routes.js"
import { ProtectedRoutes } from './components/ProtectedRoutes.jsx';
import { NewtonsCradle } from '@uiball/loaders'
import { Container } from '@mui/material';

const App = () => {
  return (
    <Suspense fallback = {
        <Container>
          <NewtonsCradle 
            size={40}
            speed={1.4} 
            color="black" 
          />
        </Container>}>
      <GlobalContextProvider>
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
      </GlobalContextProvider>
    </Suspense>
  )
}

export default App