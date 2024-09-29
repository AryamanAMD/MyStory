import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ModeToggle } from "@/components/ModeToggle"; // Ensure this is the correct path to your ModeToggle component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MyStory",
  description: "Your Unknown International Friend",
  icons: {
    icon: "/icons/Icon White BG.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/Icon White BG.svg",
          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#0E78F9",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
          },
        }}
      >
        <body className={`${inter.className} relative bg-dark-1`}>
          <Toaster />
          {children}
          <div className="fixed bottom-4 left-4 z-50">
            <ModeToggle /> {/* This will position the toggle at the bottom left */}
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
