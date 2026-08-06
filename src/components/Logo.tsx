import React from 'react';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'small' | 'large';
  className?: string;
}

export default function Logo({
  variant = 'small',
  className = '',
  ...props
}: LogoProps) {
  const imgSrc =
    variant === 'large'
      ? '/amplify-logo-large.png'
      : '/amplify-logo-small.png';

  return (
    <img
      src={imgSrc}
      alt="Amplify"
      className={`object-contain ${className}`}
      {...props}
    />
  );
}
