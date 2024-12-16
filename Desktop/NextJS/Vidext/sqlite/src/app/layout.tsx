import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { AuthProvider } from "./context/AuthContext";

export const metadata: Metadata = {
  title: "Vidext Player",
  description: "Video player with tRPC",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
