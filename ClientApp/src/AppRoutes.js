import { Home } from "./components/Home";
import List from "./components/List";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/list',
    element: <List />
  },
];

export default AppRoutes;
