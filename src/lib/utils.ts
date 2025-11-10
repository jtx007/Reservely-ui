import { clsx, type ClassValue } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type sonnerType = 'success' | 'warning' | 'error';

const renderToast = (
  type: sonnerType,
  title: string,
  message: React.ReactNode,
) => {
  let bgColor;
  if (type == 'success') {
    bgColor = 'green';
  } else if (type === 'warning') {
    bgColor = 'orange';
  } else {
    bgColor = 'red';
  }
  console.log(bgColor);
  return toast[type](`${title}`, {
    style: {
      backgroundColor: `${bgColor}`,
      color: 'whitesmoke',
      border: 'none',
    },
    description: message,
    position: 'top-center',
  });
};

export const successToast = (title: string, message: React.ReactNode) =>
  renderToast('success', title, message);

export const errorToast = (title: string, message: React.ReactNode) =>
  renderToast('error', title, message);
