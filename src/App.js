import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog/Blog';
import Mainlayout from './Components/Mainlayout/Mainlayout';
import Quiztopics from './Components/Quiztopics/Quiztopics';
import Statistics from './Components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      children: [
        {
          path: "/",
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Quiztopics></Quiztopics>
        },
        {
          path: "/home",
          element: <Quiztopics></Quiztopics>
        },
        {
          path: "statistics",
          element: <Statistics></Statistics>
        },
        {
          path: "blog",
          element: <Blog></Blog>
        },
        {
          path: "*",
          element: <div>not found</div>
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
