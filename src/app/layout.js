import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shakil Ahmed",
  description: "Generated by create next app",
};
// export const metadata = {
//   title: "Shakil Ahmed",
//   description: "Generated by create next app",
//   openGraph: {
//     images: [
//       {
//         url: "/your-image-path.jpg", // Replace with your actual image path
//         width: 1200,
//         height: 630,
//         alt: "Shakil Ahmed",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     images: ["/your-image-path.jpg"], // Replace with your actual image path
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
