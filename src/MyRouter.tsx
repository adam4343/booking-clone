import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";

import SearchPage from "./pages/search";
import Hotel from "./pages/hotel/Hotel";

export default function MainRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
    {
      path: "/hotel/:hotelId",
      element: <Hotel />,
    },
  ]);

  return <RouterProvider router={router} />;
}
