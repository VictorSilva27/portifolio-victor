import React from 'react';

const Logo = ({ 
  size = 64, 
  variant = 'modern', 
  className = '',
  showText = false,
  adaptive = false  // Para adaptar ao tema
}) => {
  const logoVariants = {
    modern: (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`modernGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
            <stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        <rect x="4" y="4" width="56" height="56" rx="16" fill={`url(#modernGradient-${size})`}/>
        
        <path 
          d="M16 20 L24 42 L32 26 L40 42 L48 20" 
          stroke="white" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        <path 
          d="M42 22 Q44 20 46 20 Q48 20 48 22 Q48 24 46 24 Q44 24 44 26 Q44 28 46 28 Q48 28 48 30" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none"
        />
        
        <ellipse cx="20" cy="16" rx="8" ry="4" fill="rgba(255,255,255,0.2)"/>
      </svg>
    ),
    
    classic: (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <defs>
          <linearGradient id={`classicGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: '#6366f1', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 1}} />
          </linearGradient>
        </defs>
        
        <circle cx="32" cy="32" r="30" fill={`url(#classicGradient-${size})`} stroke="#4f46e5" strokeWidth="2"/>
        
        <path 
          d="M18 20 L26 44 L32 28 L38 44 L46 20" 
          stroke="white" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
        />
        
        <path 
          d="M48 22 C48 20, 50 18, 52 18 C54 18, 56 20, 56 22 C56 24, 54 26, 52 26 C50 26, 48 28, 48 30 C48 32, 50 34, 52 34 C54 34, 56 32, 56 30" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none"
        />
      </svg>
    ),

    adaptive: (
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 64 64" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} transition-all duration-300`}
      >
        <defs>
          <linearGradient id={`adaptiveGradient-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" className="[stop-color:rgb(99,102,241)]" />
            <stop offset="50%" className="[stop-color:rgb(139,92,246)]" />
            <stop offset="100%" className="[stop-color:rgb(236,72,153)]" />
          </linearGradient>
        </defs>
        
        <rect 
          x="4" 
          y="4" 
          width="56" 
          height="56" 
          rx="16" 
          fill={`url(#adaptiveGradient-${size})`}
          className="drop-shadow-lg"
        />
        
        <path 
          d="M16 20 L24 42 L32 26 L40 42 L48 20" 
          stroke="white" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          fill="none"
          className="drop-shadow-sm"
        />
        
        <path 
          d="M42 22 Q44 20 46 20 Q48 20 48 22 Q48 24 46 24 Q44 24 44 26 Q44 28 46 28 Q48 28 48 30" 
          stroke="white" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          fill="none"
          className="drop-shadow-sm"
        />
        
        <ellipse cx="20" cy="16" rx="8" ry="4" fill="rgba(255,255,255,0.2)"/>
      </svg>
    )
  };

  const selectedVariant = adaptive ? 'adaptive' : variant;

  return (
    <div className={`flex items-center ${className}`}>
      {logoVariants[selectedVariant]}
      {showText && (
        <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
          Victor Silva
        </span>
      )}
    </div>
  );
};

export default Logo;
