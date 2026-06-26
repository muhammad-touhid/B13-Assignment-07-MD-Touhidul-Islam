import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Homepage from "../pages/homepage/Homepage";
import NotFoundPage from "../pages/notfoundpage/NotFoundPage";
import Timeline from "../pages/timeline/Timeline";
import FriendDetails from "../pages/friendDetails/FriendDetails";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/timeline",
        element: <Timeline />,
      },
      { path: "/stats", element: <Stats /> },
      {
        path: "/friend/:id",
        element: <FriendDetails />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);
