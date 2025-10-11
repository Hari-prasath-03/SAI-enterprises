import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Project from "./pages/project/Project";
import Contact from "./pages/contact/Contact";
import PortfolioArchive from "./pages/portfolio-archive/PortfolioArchive";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/portfolio-archive",
          element: <PortfolioArchive />,
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/project",
          element: <Project />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
