import Blogs from "./blog/Blog";
import BlogDetail from "./blog/BlogDetail";
import { Home } from "./components/Home";
import Projects from "./project/Projects";
import UserProfile from "./user/UserProfile";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/about',
    element: <UserProfile />
  },
  {
    path: '/blog',
    element: <Blogs />
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />
  },
  {
    path: '/project',
    element: <Projects />
  }
];

export default AppRoutes;
