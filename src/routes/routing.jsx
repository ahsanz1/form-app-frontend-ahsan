import Starter from '../views/starter/starter.jsx';
import NotFound from '../views/404.jsx';
import Signin from '../views/auth/signin.jsx';
import Signup from '../views/auth/signup.jsx'

var ThemeRoutes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ti-loop',
    component: Starter,
    protected: true,
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Starter,
    hidden: true,
    exact: true,
    protected: true,
  },
  {
    path: '/auth/signin',
    name: 'Signin',
    component: Signin,
    hidden: true,
    exact: true,
  },
  {
    path: '/auth/signup',
    name: 'Signup',
    component: Signup,
    hidden: true,
    exact: true,
  },
  {
    path: '/404',
    name: 'Not Found',
    icon: 'mdi mdi-image-filter-vintage',
    hidden: true,
    public: true,
    component: NotFound,
  },
  {
    pathTo: '/404',
    name: 'Not Found',
    redirect: true,
  },
];

export default ThemeRoutes;
