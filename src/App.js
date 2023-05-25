
import { RouterProvider } from 'react-router-dom';
import './App.css';
import MainRoutes from './MainRoutes';
import { useEffect } from 'react';
import { getUserAuth } from './Redux/Action';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserAuth());
  }, [dispatch]);
  return (
    <RouterProvider router={MainRoutes} />
  );
}

export default App;
