import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/axios/dist/axios.min.js";
import StartFramework from "./StartFramework/StartFramework";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Layout from "./Layout/Layout";
import NotFount from "./NotFound/NotFount";
import Api from "./CallApi/Api";

function App() {
  let route = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        { index: true, element: <StartFramework /> },
        { path: "startFramework", element: <StartFramework /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "apicall", element: <Api /> },
        { path: "*", element: <NotFount /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
