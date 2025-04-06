import { type ReactNode } from 'react';

interface FormSuccessProps {
  message: ReactNode;
}

export function FormSuccess({ message }: FormSuccessProps) {
  return (
    <div className="bg-green-50 text-green-800 p-4 rounded-lg mb-6">
      <p>{message}</p>
    </div>
  );
}