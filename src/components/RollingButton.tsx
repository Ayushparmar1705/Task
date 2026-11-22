import React, { useState } from 'react';

interface RollingButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  variant?: 'yellow' | 'sand' | 'outline';
  className?: string;
  icon?: React.ReactNode;
  hoverAnimation?: boolean;
}

export const RollingButton: React.FC<RollingButtonProps> = ({
  text,
  onClick,
  href,
  variant = 'yellow',
  className = '',
  icon,
  hoverAnimation = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const variantClasses = {
    yellow: 'border-0 bg-yellow text-forest',
    sand: 'border-0 bg-cream text-forest',
    outline: 'border border-white/40 bg-transparent text-white',
  };

  const Component = href ? 'a' : 'button';

  return (
    <Component
      href={href}
      onClick={onClick}
      onMouseEnter={() => hoverAnimation && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex w-fit items-center gap-2 overflow-hidden rounded-full px-4 py-3 font-sans text-[18px] font-medium leading-[18px] tracking-[-.3px] no-underline transition-all duration-300 ease-[cubic-bezier(0,0,0.58,1)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow ${variantClasses[variant]} ${className}`}
    >
      {/* Two-line text container for the signature rolling text animation */}
      <div className="relative flex h-[18px] flex-col overflow-hidden">
        <span
          className={`block whitespace-nowrap leading-[18px] transition-transform duration-300 ease-[cubic-bezier(0,0,0.58,1)] ${isHovered && hoverAnimation ? '-translate-y-[109%]' : 'translate-y-0'}`}
        >
          {text}
        </span>
        <span
          className={`block whitespace-nowrap leading-[18px] transition-transform duration-300 ease-[cubic-bezier(0,0,0.58,1)] ${isHovered && hoverAnimation ? '-translate-y-full' : 'translate-y-0'}`}
        >
          {text}
        </span>
      </div>

      {/* Arrow Icon */}
      {icon || (
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-[18px] w-[18px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(.25,.1,.25,1)] ${isHovered && hoverAnimation ? 'translate-x-[3px]' : 'translate-x-0'}`}
        >
          <path
            d="M1.6102 7.74994L14.2348 7.74994L11.5675 5.28022C11.2512 4.98732 11.2512 4.51256 11.5675 4.21967C11.8838 3.92678 12.3966 3.92678 12.7129 4.21967L16.7629 7.96967L16.8183 8.0268C17.0777 8.32138 17.0594 8.75563 16.7629 9.03022L12.7129 12.7802C12.3966 13.0731 11.8838 13.0731 11.5675 12.7802C11.2512 12.4873 11.2512 12.0126 11.5675 11.7197L14.2348 9.24994L1.6102 9.24994C1.16285 9.24994 0.800201 8.91416 0.800201 8.49994C0.800201 8.08573 1.16285 7.74994 1.6102 7.74994Z"
            fill="currentColor"
          />
        </svg>
      )}
    </Component>
  );
};
