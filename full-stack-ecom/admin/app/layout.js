import './globals.css';
import { NextAuthProvider } from './provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  // return (
  //   <html lang="en">
  //     <body suppressHydrationWarning={true}>
  //       <NextAuthProvider>{children}</NextAuthProvider>
  //     </body>
  //   </html>
  // );
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}