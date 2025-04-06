import { type ReactNode } from 'react';

interface FormErrorProps {
  message: ReactNode;
}

export function FormError({ message }: FormErrorProps) {
  return (
    <div className="bg-red-50 text-red-800 p-4 rounded-lg mb-6">
      <p>{message}</p>
    </div>
  );
}