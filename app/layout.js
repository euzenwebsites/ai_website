import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./Components/Authprovider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toolbets Ai",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
