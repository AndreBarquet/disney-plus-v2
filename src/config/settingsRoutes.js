import { Person } from '@mui/icons-material';

import ProfilePage from '../Pages/Settings/Profile';

const routes = [
  {
    key: 'profile',
    label: 'Profile',
    path: '/profile',
    icon: <Person />,
    component: <ProfilePage />,
  }
]

export default routes;