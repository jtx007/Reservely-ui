import { Link } from 'react-router';
import { Button } from './ui/button';
import { Field } from './ui/field';
import { Spinner } from './ui/spinner';

export interface FooterUrl {
  url: string;
  text: string;
}

interface FormFooterProps {
  isPending: boolean;
  title: string;
  footerUrl?: FooterUrl;
}

export const FormFooter = ({
  isPending,
  title,
  footerUrl,
}: FormFooterProps) => {
  return (
    <div className='flex gap-4'>
      {' '}
      <Field orientation='horizontal'>
        <Button
          disabled={isPending}
          className='bg-amber-500'
          type='submit'
          form={title}
        >
          {isPending ? (
            <>
              <Spinner /> Submit
            </>
          ) : (
            'Submit'
          )}
        </Button>
      </Field>
      {footerUrl && (
        <Field>
          <Button className='bg-amber-700' type='button'>
            <Link className='text-nowrap' to={footerUrl.url}>
              {footerUrl.text}
            </Link>
          </Button>
        </Field>
      )}
    </div>
  );
};
