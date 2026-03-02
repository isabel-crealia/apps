import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'My Next.js App',
  description: 'A Next.js application with Tailwind CSS'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}