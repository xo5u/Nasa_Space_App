import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Team from "./pages/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/team",
          element: <Team />,
        },

      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
