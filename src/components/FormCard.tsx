import type { ZodObject } from 'zod';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

interface FormCardPropTypes {
    title: string;
    description: string;
    schema: ZodObject;
    footerUrl?: string;
    footerText?: string;
}

export const FormCard = ({ title, description }: FormCardPropTypes) => {
    // const formFields = Object.keys(schema.shape);
    return (
        <Card className='min-w-md h-fit border-1 border-black'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    );
};
