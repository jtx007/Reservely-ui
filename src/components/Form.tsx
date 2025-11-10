import {
  useForm,
  type FieldValues,
  type DefaultValues,
  type SubmitHandler,
  Controller,
} from 'react-hook-form';
import { Field, FieldGroup, FieldLabel } from './ui/field';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import type { UseMutateAsyncFunction } from '@tanstack/react-query';
import type { FormField } from '@/lib/fields';
interface FormProps<
  TData,
  TVariables extends FieldValues,
  TError = unknown,
  TContext = unknown,
> {
  fields: FormField<TVariables>[];
  mutateFn: UseMutateAsyncFunction<TData, TError, TVariables, TContext>;
  isPending: boolean;
  isError: boolean;
  title: string;
}

export const Form = <
  TData,
  TVariables extends FieldValues,
  TError = unknown,
  TContext = unknown,
>({
  fields,
  mutateFn,
  title,
}: FormProps<TData, TVariables, TError, TContext>) => {
  const defaultValues = Object.fromEntries(
    fields.map((f) => [f.label, f.defaultValue]),
  ) as DefaultValues<TVariables>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TVariables>({
    defaultValues,
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<TVariables> = async (data) => {
    await mutateFn(data);
  };
  return (
    <form id={title} onSubmit={handleSubmit(onSubmit)}>
      <FieldGroup>
        {fields.map((f) => {
          return (
            <Controller
              key={f.label}
              name={f.label}
              control={control}
              rules={{
                required: f.required && `${f.label} is required`,
                min: f.min,
                max: f.max,
                minLength: f.minLength,
                maxLength: f.maxLength,
              }}
              render={({ field }) => (
                <>
                  <Field key={f.label}>
                    <FieldLabel htmlFor={f.label}>{f.label}</FieldLabel>

                    {f.type === 'textArea' ? (
                      <Textarea
                        className={errors[f.label] && 'border-red-500'}
                        id={f.label}
                        {...field}
                      />
                    ) : (
                      <Input
                        className={errors[f.label] && 'border-red-500'}
                        id={f.label}
                        {...field}
                        type={f.type}
                      />
                    )}
                    {errors[f.label] && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors[f.label]?.message?.toString()}
                      </p>
                    )}
                  </Field>
                </>
              )}
            />
          );
        })}
      </FieldGroup>
    </form>
  );
};
