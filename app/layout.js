import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LiteTube",
  description: "Code by cuongtk2002",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Sử dụng flexbox để tạo layout */}
        <div className="flex flex-col min-h-screen bg-[#171717]">
          {/* Navbar cố định ở trên */}
          <Navbar />

          {/* Phần nội dung chính */}
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
