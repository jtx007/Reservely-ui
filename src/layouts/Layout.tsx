import { NavBar, NavLink, ModeToggle } from '@/components';
import { Link, Outlet } from 'react-router';
import { useAuth } from '@/context';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Fragment } from 'react/jsx-runtime';
export const Layout = () => {
  const { isLoggedIn, currentUser, setTokenLogout } = useAuth();
  const items = [
    { name: 'Home', path: '/' },
    { name: 'Restaurants', path: '/restaurants' },
    isLoggedIn && currentUser
      ? { name: 'Profile', path: `/profile/${currentUser?.username}` }
      : { name: 'Login', path: '/login' },
  ];

  const components = [
    ...items.map((item) => {
      if (item.name !== 'Profile') {
        return <NavLink key={item.name} name={item.name} path={item.path} />;
      } else {
        return (
          <Fragment key={item.name}>
            <Link to={item.path}>
              <Avatar>
                <AvatarImage
                  src='https://github.com/shadcn.png'
                  alt='@shadcn'
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
            <Button variant={'outline'} onClick={setTokenLogout}>
              Log Out
            </Button>
          </Fragment>
        );
      }
    }),
    <ModeToggle key={'theme-toggle'} />,
  ];
  return (
    <>
      <NavBar items={components} />
      <div className='flex p-[5rem] m-auto justify-center-safe items-center '>
        <Outlet />
      </div>
    </>
  );
};
