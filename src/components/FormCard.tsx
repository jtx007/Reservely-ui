import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Form } from './Form';
import { FormFooter } from './FormFooter';
import type { UseMutateAsyncFunction } from '@tanstack/react-query';
import type { FieldValues } from 'react-hook-form';
import { type FormField } from '@/lib/fields';
interface FooterUrl {
  url: string;
  text: string;
}

interface FormCardPropTypes<
  TData,
  TVariables extends FieldValues,
  TError = unknown,
  TContext = unknown,
> {
  title: string;
  description: string;
  fields: FormField<TVariables>[];
  footerUrl?: FooterUrl;
  mutateFn: UseMutateAsyncFunction<TData, TError, TVariables, TContext>;
  isPending: boolean;
  isError: boolean;
}
export const FormCard = <
  TData,
  TVariables extends FieldValues,
  TError = unknown,
  TContext = unknown,
>({
  title,
  description,
  fields,
  footerUrl,
  mutateFn,
  isPending,
  isError,
}: FormCardPropTypes<TData, TVariables, TError, TContext>) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form<TData, TVariables>
          title={title}
          isError={isError}
          isPending={isPending}
          fields={fields}
          mutateFn={mutateFn}
        />
      </CardContent>
      <CardFooter>
        <FormFooter isPending={isPending} footerUrl={footerUrl} title={title} />
      </CardFooter>
    </Card>
  );
};
