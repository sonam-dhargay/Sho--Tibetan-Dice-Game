
import React from 'react';
import { T } from '../translations';

const EXTERNAL_LOGO_URL = "https://lh3.googleusercontent.com/d/1ASVPsOb5WHhHfFGxm380UuPn6vt4M1nb";

interface ShoLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const ShoLogo: React.FC<ShoLogoProps> = ({ className = "", size = 'md', showText = true }) => {
  const sizeMap = {
    sm: { img: 'w-10 h-10', en: 'text-[10px]', bo: 'text-[12px]', gap: 'mt-0.5' },
    md: { img: 'w-24 h-24', en: 'text-xl', bo: 'text-4xl', gap: 'mt-2' },
    lg: { img: 'w-32 h-32', en: 'text-2xl', bo: 'text-5xl', gap: 'mt-3' },
    xl: { img: 'w-48 h-48', en: 'text-4xl', bo: 'text-8xl', gap: 'mt-4' }
  };

  const config = sizeMap[size];

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes floatLogo {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.02); }
        }
        .animate-float-logo {
          animation: floatLogo 5s ease-in-out infinite;
        }
      `}} />
      
      {/* Decorative Glow Backdrop */}
      <div className={`absolute ${config.img} bg-amber-600/10 blur-[40px] rounded-full pointer-events-none`} />
      
      <div className="relative z-10 animate-float-logo flex flex-col items-center">
        <img 
          src={EXTERNAL_LOGO_URL} 
          alt="Sho Logo"
          className={`${config.img} object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]`}
        />
        
        {showText && (
          <div className={`flex flex-col items-center ${config.gap} transition-all duration-500`}>
            <span className={`${config.en} font-cinzel font-bold text-amber-600 tracking-[0.2em] leading-none drop-shadow-sm`}>
              {T.lobby.title.en.toUpperCase()}
            </span>
            <span className={`${config.bo} font-serif text-amber-700 leading-none mt-1`}>
              {T.lobby.title.bo}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
