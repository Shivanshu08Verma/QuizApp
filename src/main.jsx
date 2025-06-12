import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import Topic from "./components/Topic.jsx";
import QuestionPage from "./components/QuestionPage.jsx";
import Result from "./components/Result.jsx";
import Error from "./components/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topic",
        element: <Topic />,
      },
      {
        path: "/result",
        element: <Result />,
      },
      {
        path: "/question/:id/:title",
        element: <QuestionPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
