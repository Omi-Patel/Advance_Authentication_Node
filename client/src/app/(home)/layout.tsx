import Navbar from "@/components/Navbar";
import "../globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" ">
        <Navbar />
        <div className="p-3 sm:p-8">{children}</div>
      </body>
    </html>
  );
}
