import {
    NavigationMenu,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import type React from 'react';

interface NavBarProps {
    items: React.ReactNode[];
}

export const NavBar = ({ items }: NavBarProps) => {
    return (
        <div className='flex p-[1rem] justify-around border-2 border-b-indigo-100'>
            <h1 className=' scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance'>
                Reservely
            </h1>
            <NavigationMenu>
                <NavigationMenuList className='flex gap-4'>
                    {items}
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
};
