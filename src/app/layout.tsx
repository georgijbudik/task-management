import "@/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  metadataBase: new URL("https://task-management-one-xi.vercel.app/"),
  title: "Task Management API",
  description: "Manage your tasks and stay productive all the time",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/icons/favicon-light.png",
        href: "/icons/favicon-light.png",
      },

      {
        media: "(prefers-color-scheme: dark)",
        url: "/icons/favicon.png",
        href: "/icons/favicon.png",
      },
    ],
  },
  openGraph: {
    title: "Task Management API",
    description: "Manage your tasks and stay productive all the time",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
