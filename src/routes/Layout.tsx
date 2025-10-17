import { ModeToggle, NavBar, NavLink } from '@/components';
import { Outlet } from 'react-router';
const Layout = () => {
    const items = [
        { name: 'Home', path: '/' },
        { name: 'Login', path: '/login' },
    ];
    const components = [
        ...items.map((item) => (
            <NavLink key={item.name} name={item.name} path={item.path} />
        )),
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

export default Layout;
