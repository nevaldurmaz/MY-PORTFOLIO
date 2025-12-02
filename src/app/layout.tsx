import "./globals.css";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Neval Durmaz - Portfolio</title>
        <meta name="description" content="React Developer & Eğitmen" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextTopLoader color="#eb7ad4" height={3} showSpinner={false} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
