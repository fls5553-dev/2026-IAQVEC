
import React from 'react';

export const VrIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect x="1" y="7" width="22" height="10" rx="2" ry="2"></rect>
        <path d="M7 17v-4"></path>
        <path d="M17 17v-4"></path>
        <path d="M12 17v-4"></path>
        <path d="M4 12H2"></path>
        <path d="M22 12h-2"></path>
    </svg>
);
