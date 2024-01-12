import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RouterErrorPage from "./router-error-page.tsx";
import Root from "./routes/root";
import App from "./App.tsx";
import { cardLoader, rootLoader } from "./loaders.tsx";
import Card from "./routes/card.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <RouterErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "default",
        element: <App />,
      },
      {
        path: "card/:cardPwd",
        element: <Card />,
        loader: cardLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
