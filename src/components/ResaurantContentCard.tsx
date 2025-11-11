interface RestaurantContentCardProps {
  name: string;
  description: string;
  id: number;
  open: number;
  close: number;
}
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Link } from 'react-router';

export const RestaurantContentCard = ({
  name,
  description,
  open,
  id,
  close,
}: RestaurantContentCardProps) => {
  return (
    <Link to={`/restaurants/${id}`}>
      <Card className='flex flex-col w-full p-4'>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Open: {open}</p>
          <p>Close: {close}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
