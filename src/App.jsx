import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  About,
  Cocktail,
  Error,
  HomeLayout,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader} from './pages/Cocktail'
import { actions as newsletterAction } from "./pages/Newsletter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SinglePageError />,
        loader: landingLoader,
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError/>,
        loader: singleCocktailLoader,
        element: <Cocktail />,
      },
      {
        path: "newsLetter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
