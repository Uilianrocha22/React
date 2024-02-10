import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ListItem from "./pages/items/ListItem";
import CreateItem from "./pages/items/CreatItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/ItemsLayout";

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
