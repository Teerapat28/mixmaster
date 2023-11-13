import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsLetter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
      },
    ]
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
