import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata = {
  title: "Buy Me a Beer",
  description: "Buy Me a Beer is a funding web app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`font-gooflex h-full antialiased`}
    >
      <body className="bg-[#5b5570] min-h-full flex flex-col">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
