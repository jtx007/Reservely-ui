interface ToastMessageProps {
  message: string;
}

export const ToastMessage = ({ message }: ToastMessageProps) => {
  return <h3 className='text-white'>{message}</h3>;
};
