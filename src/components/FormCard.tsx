import type { ZodObject } from 'zod';
import { z } from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { useForm } from '@tanstack/react-form';
import { Field, FieldError, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Link } from 'react-router';
import type { UseMutateAsyncFunction } from '@tanstack/react-query';
import { Spinner } from './ui/spinner';
interface FooterUrl {
  url: string;
  text: string;
}
interface FormCardPropTypes<TData = unknown, TVariables = unknown> {
  title: string;
  description: string;
  schema: ZodObject<z.ZodRawShape>;
  footerUrl: FooterUrl;
  mutateFn: UseMutateAsyncFunction<TData, Error, TVariables, unknown>;
  isPending: boolean;
  isError: boolean;
}

export const FormCard = <TData = unknown, TVariables = unknown>({
  title,
  description,
  schema,
  footerUrl,
  mutateFn,
  isPending,
  isError,
}: FormCardPropTypes<TData, TVariables>) => {
  const fields = Object.keys(schema.shape);
  const defaultValues = Object.fromEntries(fields.map((field) => [field, '']));

  const form = useForm({
    defaultValues: defaultValues as z.infer<typeof schema>,
    validators: {
      onSubmit: schema,
    },
    onSubmit: async ({ value }) => {
      if (mutateFn) {
        await mutateFn(value as TVariables);
      }
    },
  });

  return (
    <Card className='min-w-md h-fit border-1 border-black'>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id={`${title}-form`}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            {fields.map((f) => (
              <form.Field
                key={f}
                name={f}
                children={(field) => {
                  const isInvalid =
                    field.state.meta.isTouched && !field.state.meta.isValid;
                  return (
                    <Field data-invalid={isInvalid}>
                      <FieldLabel htmlFor={field.name}>{field.name}</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={(field.state.value as string) || ''}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        aria-invalid={isInvalid}
                        autoComplete='off'
                        type={field.name == 'password' ? 'password' : 'text'}
                      />
                      {isInvalid && (
                        <FieldError errors={field.state.meta.errors} />
                      )}
                    </Field>
                  );
                }}
              />
            ))}
          </FieldGroup>
        </form>
        {isError && 'Error creating user'}
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button
            disabled={isPending}
            className='bg-amber-500'
            type='submit'
            form={`${title}-form`}
          >
            {isPending ? (
              <>
                <Spinner /> 'Submitting'
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </Field>
        <Field>
          <Button className='bg-amber-700' type='button'>
            <Link className='text-nowrap' to={footerUrl.url}>
              {footerUrl.text}
            </Link>
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
};
