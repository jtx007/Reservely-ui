import { Link as Routerlink } from 'react-router';

import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from './ui/navigation-menu';

interface NavLinkProps {
    name: string;
    path: string;
}

export const NavLink = ({ name, path }: NavLinkProps) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
            >
                <Routerlink to={path}>{name}</Routerlink>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};
