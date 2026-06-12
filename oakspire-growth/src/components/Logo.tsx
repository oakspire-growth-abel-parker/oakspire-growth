import React from 'react';

interface LogoProps {
  variant?: 'header' | 'stacked' | 'icon';
  className?: string;
  iconColor?: string;
  textColor?: string;
}

export default function Logo({
  variant = 'header',
  className = '',
  iconColor = '#081a31',
  textColor = '#040d1a',
}: LogoProps) {
  // Sophisticated custom highlight color to match the premium 3D bevel/lighting of the corporate architectural spire
  // If iconColor is pure white (like in header dark mode / footer), we use a silver-slate highlight, else we use the logo's exact steel grey.
  const isDarkBk = iconColor === '#FFFFFF' || iconColor === '#fff';
  const highlightColor = isDarkBk ? '#94a3b8' : '#7a869a';

  // Symmetrical oak tree canopy branches radiating organic lines
  const svgIcon = (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        {/* Symmetrical direct-response Masterpiece Oak Leaf pattern */}
        <path
          id="oak-leaf"
          d="M0 -14 C-4 -12 -5 -9 -4 -7 C-6 -7 -7 -5 -6 -3 C-7 -2 -6 0 -4 1 C-5 3 -4 5 -1 5 L0 8 L1 8 C4 5 5 3 4 1 C6 0 7 -2 6 -3 C7 -5 6 -7 4 -7 C5 -9 4 -12 0 -14 Z"
        />
      </defs>

      {/* Symmetrical organic branch paths */}
      <g stroke={iconColor} strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* Main central vertical dividing stem */}
        <path d="M80 82 V40" strokeWidth="2.2" />

        {/* Outer and inner branches fanning outwards symmetrically */}
        <path d="M80 78 C72 76 64 78 54 84" />
        <path d="M80 78 C88 76 96 78 106 84" />

        <path d="M80 66 C68 62 58 64 48 70" />
        <path d="M80 66 C92 62 102 64 112 70" />

        <path d="M80 56 C70 50 60 52 52 58" />
        <path d="M80 56 C90 50 100 52 108 58" />

        <path d="M80 46 C74 38 66 38 60 44" />
        <path d="M80 46 C86 38 94 38 100 44" />
      </g>

      {/* High-density luxury Oak leaves arrangement mirroring the user logo */}
      <g stroke={iconColor} strokeWidth="1" fill={iconColor} opacity="0.95">
        {/* Top central crown */}
        <use href="#oak-leaf" x="80" y="24" transform="rotate(0, 80, 24) scale(0.95)" />
        <use href="#oak-leaf" x="73" y="27" transform="rotate(-22, 73, 27) scale(0.85)" />
        <use href="#oak-leaf" x="87" y="27" transform="rotate(22, 87, 27) scale(0.85)" />

        {/* Upper tier */}
        <use href="#oak-leaf" x="62" y="34" transform="rotate(-40, 62, 34) scale(0.85)" />
        <use href="#oak-leaf" x="98" y="34" transform="rotate(40, 98, 34) scale(0.85)" />
        <use href="#oak-leaf" x="70" y="44" transform="rotate(-25, 70, 44) scale(0.8)" />
        <use href="#oak-leaf" x="90" y="44" transform="rotate(25, 90, 44) scale(0.8)" />

        {/* Mid tier */}
        <use href="#oak-leaf" x="50" y="48" transform="rotate(-65, 50, 48) scale(0.85)" />
        <use href="#oak-leaf" x="110" y="48" transform="rotate(65, 110, 48) scale(0.85)" />
        <use href="#oak-leaf" x="60" y="58" transform="rotate(-50, 60, 58) scale(0.8)" />
        <use href="#oak-leaf" x="100" y="58" transform="rotate(50, 100, 58) scale(0.8)" />

        {/* Lower tier */}
        <use href="#oak-leaf" x="42" y="65" transform="rotate(-85, 42, 65) scale(0.85)" />
        <use href="#oak-leaf" x="118" y="65" transform="rotate(85, 118, 65) scale(0.85)" />
        <use href="#oak-leaf" x="54" y="74" transform="rotate(-75, 54, 74) scale(0.8)" />
        <use href="#oak-leaf" x="106" y="74" transform="rotate(75, 106, 74) scale(0.8)" />

        {/* Ground wing bases */}
        <use href="#oak-leaf" x="44" y="82" transform="rotate(-105, 44, 82) scale(0.8)" />
        <use href="#oak-leaf" x="116" y="82" transform="rotate(105, 116, 82) scale(0.8)" />
        
        {/* Soft fill inner core */}
        <use href="#oak-leaf" x="75" y="54" transform="rotate(-15, 75, 54) scale(0.7)" opacity="0.8" />
        <use href="#oak-leaf" x="85" y="54" transform="rotate(15, 85, 54) scale(0.7)" opacity="0.8" />
      </g>

      {/* Symmetrical bevelled high-rise columns matching the precise corporate logo image */}
      <g>
        {/* LEFT COMPONENT group - Solid iconColor */}
        <g fill={iconColor}>
          {/* Left Inner block */}
          <path d="M65 120 V87 L73 80 V120 Z" />
          {/* Leftmost Outer block */}
          <path d="M58 120 L58 105 L63 100 L63 120 Z" />
          {/* Central arrow left facet */}
          <path d="M75 120 V72 L80 58 V120 Z" />
        </g>

        {/* RIGHT COMPONENT group - Highlighted metallic color */}
        <g fill={highlightColor}>
          {/* Central arrow right facet */}
          <path d="M80 120 V58 L84 72 V120 Z" />
          {/* Right Inner block */}
          <path d="M87 120 V80 L95 87 V120 Z" />
          {/* Rightmost Outer block */}
          <path d="M97 120 L97 100 L102 105 V120 Z" />
        </g>
      </g>

      {/* Symmetrical curved ground horizon line matching the base plate */}
      <path
        d="M25 120 C55 110 105 110 135 120"
        stroke={iconColor}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-block ${className}`} style={{ width: '48px', height: '48px' }}>
        {svgIcon}
      </div>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <div className="w-24 h-24 mb-3">
          {svgIcon}
        </div>
        <h1 
          className="text-3xl font-medium tracking-[0.16em] uppercase font-cinzel select-none"
          style={{ color: textColor }}
        >
          Oakspire
        </h1>
        <div className="flex items-center w-52 mt-2 justify-center gap-3">
          <div className="w-12 h-[1px] shrink-0" style={{ backgroundColor: `${textColor}50` }}></div>
          <span 
            className="text-[10px] tracking-[0.38em] uppercase font-sans font-medium"
            style={{ color: `${textColor}90` }}
          >
            Growth
          </span>
          <div className="w-12 h-[1px] shrink-0" style={{ backgroundColor: `${textColor}50` }}></div>
        </div>
      </div>
    );
  }

  // Variant default 'header' (Horizontal lockup with classical presentation)
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="w-11 h-11 flex-shrink-0">
        {svgIcon}
      </div>
      <div className="flex flex-col select-none">
        <span 
          className="text-xl font-medium tracking-[0.14em] uppercase font-cinzel leading-none"
          style={{ color: textColor }}
        >
          Oakspire
        </span>
        <div className="flex items-center gap-1.5 mt-1.5">
          <div className="w-4 h-[1px]" style={{ backgroundColor: `${textColor}40` }}></div>
          <span 
            className="text-[9px] tracking-[0.32em] uppercase font-sans font-semibold leading-none"
            style={{ color: textColor }}
          >
            Growth
          </span>
          <div className="w-4 h-[1px]" style={{ backgroundColor: `${textColor}40` }}></div>
        </div>
      </div>
    </div>
  );
}
