
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar/Navbar";
import StoreProvider from "@/store/StoreProvoider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Too-Commerce",
  description: "Your shopping mall",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,500;0,600;0,700;1,300;1,400&family=Raleway:wght@300;400;500;600&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Navbar />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
