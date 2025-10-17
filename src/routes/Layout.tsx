import { NavBar, NavLink } from '@/components';
import { Outlet } from 'react-router';
const Layout = () => {
    const items = [
        { name: 'Home', path: '/', isActive: true },
        { name: 'Login', path: '/login', isActive: false },
    ];

    return (
        <>
            <NavBar
                items={items.map((item) => (
                    <NavLink
                        name={item.name}
                        path={item.path}
                        isActive={item.isActive}
                    />
                ))}
            />
            <Outlet />
        </>
    );
};

export default Layout;
