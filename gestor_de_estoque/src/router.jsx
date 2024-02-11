import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ListItem from "./pages/itens/ListItem";
import CreateItem from "./pages/itens/CreatItem";
import ShowItem from "./pages/itens/ShowItem";
import UpdateItem from "./pages/itens/UpdateItem";
import ItemsLayout from "./pages/itens/ItemsLayout";

// localhost:3000/
// localhost:3000/itens

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          { index: true, element: <ListItem /> },
          { path: "new", element: <CreateItem /> },
          { path: ":id", element: <ShowItem /> },
          { path: ":id/update", element: <UpdateItem /> },
        ],
      },
    ],
  },
]);

export default router;
