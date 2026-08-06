import React from 'react';
import smallLogo from '../assets/images/amplify_favicon_1786042841289.jpg';
import largeLogo from '../assets/images/amplify_logo_1786042824020.jpg';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  variant?: 'small' | 'large';
  className?: string;
}

export default function Logo({ variant = 'small', className = '', ...props }: LogoProps) {
  const imgSrc = variant === 'large' ? largeLogo : smallLogo;
  
  return (
    <img 
      src={imgSrc} 
      alt="Amplify Logo" 
      className={`object-contain ${className}`}
      {...props} 
    />
  );
}
