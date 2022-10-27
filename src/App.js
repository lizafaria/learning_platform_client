import logo from './logo.svg';
import './App.css';
import { useContext } from 'react';
import AuthContext from './Context/AuthProvider';
import { RouterProvider } from 'react-router-dom';
import router from './components/Route';

function App() {
  const{topic}=useContext(AuthContext)
  return (
    <div id={topic}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
