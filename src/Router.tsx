import { useRoutes } from "react-router-dom";
import BuilderPage from "./pages/BuilderPage";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <BuilderPage />,
    },
  ]);
};

export default Router;
