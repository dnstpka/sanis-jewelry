import type { Metadata } from 'next';
import { Header } from '@/components';

import './globals.scss';

export const metadata: Metadata = {
  title: 'Sanis Jewelry',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
