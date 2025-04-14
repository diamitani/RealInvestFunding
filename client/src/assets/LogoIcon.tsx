import { SVGProps } from 'react';

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width="48" height="48" rx="8" fill="#0047AB"/>
      <path d="M12 14H36V18H12V14Z" fill="#FFA500"/>
      <path d="M24 20L36 20V24H24V20Z" fill="#FFA500"/>
      <path d="M12 20H20V34H12V20Z" fill="#FFA500"/>
      <path d="M24 26H36V30H24V26Z" fill="#FFA500"/>
      <path d="M24 32H36V36H24V32Z" fill="#FFA500"/>
      <path d="M39 10H9C8.44772 10 8 10.4477 8 11V37C8 37.5523 8.44772 38 9 38H39C39.5523 38 40 37.5523 40 37V11C40 10.4477 39.5523 10 39 10ZM38 36H10V12H38V36Z" fill="white"/>
    </svg>
  );
}