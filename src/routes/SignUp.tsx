import { counter, picnic, queue, table } from '@/assets';
import { FormCard } from '@/components';
import { signUpFormSchema } from '@/lib/formSchemas';
export const SignUp = () => {
    return (
        <>
            {' '}
            <div className='flex flex-col justify-center-safe  h-full w-full'>
                <img className='h-1/4' src={picnic} alt='picnic' />
                <img className='h-1/4' src={queue} alt='queue' />
                <img className='h-1/4' src={table} alt='table' />
                <img className='h-1/4' src={counter} alt='counter' />
            </div>
            <div className='flex justify-center-safe items-center-safe h-full w-full '>
                <FormCard
                    title='Sign Up'
                    schema={signUpFormSchema}
                    description='Sign Up to book restaurants'
                />
            </div>
        </>
    );
};
