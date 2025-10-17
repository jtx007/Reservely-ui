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
        <NavigationMenu className=' max-w-full justify-end'>
            <NavigationMenuList>{items}</NavigationMenuList>
        </NavigationMenu>
    );
};
