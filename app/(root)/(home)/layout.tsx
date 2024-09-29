import { Metadata } from 'next';
import { ReactNode } from 'react';

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Analytics } from "@vercel/analytics/react";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'MyStory',
  description: 'Your Unknown International Friend',
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div>
      <main className="relative">
        <Navbar />

        <div className="flex">
          <Sidebar />

          <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
            <div className="w-full">{children}</div>
          </section>
        </div>
        <Analytics />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
