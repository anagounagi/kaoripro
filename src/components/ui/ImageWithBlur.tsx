'use client';

import { useState } from 'react';

interface ImageWithBlurProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithBlur({
  src,
  alt,
  width = 800,
  height = 600,
  className = '',
  priority = false,
  sizes = '100vw'
}: ImageWithBlurProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={sizes}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoad={() => setIsLoading(false)}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchpriority={priority ? "high" : "auto"}
      />
    </div>
  );
}