import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Dashboard from './Pages/Dashboard/Home';
import Users from './Pages/Dashboard/Users';

interface AllRoutesProps {}

const AllRoutes: React.FC<
  AllRoutesProps
> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path='users' element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
