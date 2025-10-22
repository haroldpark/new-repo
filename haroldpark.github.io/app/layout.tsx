import { TopNav } from "@/components/TopNav";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
// TODO: Configure database queries
// import { getUser, getTeamForUser } from '@/lib/db/queries';
import { SWRConfig } from "swr";

export const metadata: Metadata = {
  title: "HP Solutions",
  description: "You create your own world.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${inter.className}`}
    >
      <body className="min-h-[100dvh]">
        <TopNav />
        <SWRConfig
          value={{
            fallback: {
              // TODO: Configure database queries
              // We do NOT await here
              // Only components that read this data will suspend
              // '/api/user': getUser(),
              // '/api/team': getTeamForUser()
            },
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
