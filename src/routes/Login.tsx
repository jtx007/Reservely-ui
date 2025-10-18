import { FormCard } from '@/components';
import { loginFormSchema } from '@/lib/formSchemas';
import { bar, waiter, date, family } from '../assets';

function Login() {
    return (
        <>
            <div className='flex justify-center-safe items-center-safe h-full w-full '>
                <FormCard
                    title='Login'
                    schema={loginFormSchema}
                    description='Login to book restaurants'
                />
            </div>
            <div className='flex flex-col justify-center-safe  h-full w-full'>
                <img className='h-1/4' src={bar} alt='bar' />
                <img className='h-1/4' src={waiter} alt='waiter' />
                <img className='h-1/4' src={date} alt='date' />
                <img className='h-1/4' src={family} alt='family' />
            </div>
        </>
    );
}

export default Login;
