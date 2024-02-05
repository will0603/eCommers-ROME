import HomePage from "@pages/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    loader: () => {
      //esta funcion se ejecutara antes de que se renderize la página
      console.log("home path loader");
      return "loader";
    },
    errorElement: <p>Error Page</p>,
  },
  
]);
