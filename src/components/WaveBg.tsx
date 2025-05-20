import React from 'react';
const WaveBg = () => (
  <div className="absolute inset-0 w-full h-full overflow-hidden opacity-10">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
      <path d="M0,50 Q25,30 50,50 T100,50 V100 H0 Z" fill="currentColor">
        <animate attributeName="d" 
                dur="10s" 
                repeatCount="indefinite"
                values="M0,50 Q25,30 50,50 T100,50 V100 H0 Z;
                        M0,50 Q25,70 50,50 T100,50 V100 H0 Z;
                        M0,50 Q25,30 50,50 T100,50 V100 H0 Z"/>
      </path>
    </svg>
  </div>
);
export default WaveBg;