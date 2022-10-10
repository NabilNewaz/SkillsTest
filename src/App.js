import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Mainlayout from './Components/Mainlayout/Mainlayout';
import Quiztopics from './Components/Quiztopics/Quiztopics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          element: <Quiztopics></Quiztopics>
        }
      ]
    }
  ])
  return (
    <div className="container mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
