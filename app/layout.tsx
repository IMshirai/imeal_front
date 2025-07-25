import type { Metadata } from "next";
import MainLayout from "./_components/common/mainLayout";
import BaseProvider from "./_context/baseContext";
import UserProvider from "./_context/userContext";
import { APP_NAME } from "./_constants/pageText";

import "./reset.css"
import "./globals.css";

export const metadata: Metadata = {
  title: APP_NAME
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  
  return (
    <html lang="ja">
      <body>
        <UserProvider>
          <BaseProvider>
            <MainLayout>
              {children}
            </MainLayout>
          </BaseProvider>
        </UserProvider>
      </body>
    </html>
  );
}
