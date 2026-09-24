import React, { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
  className?: string;
}

export const PhoneScreen: React.FC<Props> = ({
  src,
  alt,
  loading = 'lazy',
  className = '',
}) => {
  const [tall, setTall] = useState(false);
  return (
    <div
      className={`absolute inset-0 pt-7 ${
        tall ? 'overflow-y-auto no-scrollbar' : ''
      } ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={(e) =>
          setTall(
            e.currentTarget.naturalHeight / e.currentTarget.naturalWidth > 2.4
          )
        }
        className={
          tall ? 'w-full h-auto block' : 'w-full h-full object-contain object-top'
        }
      />
    </div>
  );
};
