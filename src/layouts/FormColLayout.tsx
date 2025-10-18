import { Outlet } from 'react-router';

export const FormColLayout = () => {
    return (
        <div className='flex w-screen h-screen justify-around items-center '>
            <Outlet />
        </div>
    );
};
