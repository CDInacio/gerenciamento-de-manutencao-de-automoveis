"use client";
/* eslint-disable */
import { QueryClient, QueryClientProvider } from "react-query";

import { FeedbackContextProvider } from "@/context/feedbackContext";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

const queryClient = new QueryClient();

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <FeedbackContextProvider>{children}</FeedbackContextProvider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
