import { Link } from 'react-router';
import {
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from './ui/navigation-menu';

interface NavLinkProps {
    name: string;
    path: string;
    isActive: boolean;
}

export const NavLink = ({ name, path, isActive }: NavLinkProps) => {
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                active={isActive}
                className={navigationMenuTriggerStyle()}
            >
                <Link to={path}>{name}</Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
};
