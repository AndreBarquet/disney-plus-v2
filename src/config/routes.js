import { Add, Home, Movie, Search, Star, Tv, } from '@mui/icons-material';

import HomePage from '../Pages/Home/Home';

const routes = [
  {
    key: 'home',
    label: 'Home',
    path: '/home',
    icon: <Home />,
    component: <HomePage />,
  },
  {
    key: 'search',
    label: 'Search',
    path: '/search',
    icon: <Search />,
    component: null,
  },
  {
    key: 'watchList',
    label: 'Watchlist',
    path: '/watchList',
    icon: <Add />,
    component: null,
  },
  {
    key: 'originals',
    label: 'Originals',
    path: '/originals',
    icon: <Star />,
    component: null,
  },
  {
    key: 'movies',
    label: 'Movies',
    path: '/movies',
    icon: <Movie />,
    component: null,
  },
  {
    key: 'series',
    label: 'Series',
    path: '/series',
    icon: <Tv />,
    component: null,
  },
]

export default routes;