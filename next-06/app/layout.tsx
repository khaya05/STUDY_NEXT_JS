import './globals.css';
import Navbar from './components/Navbar';
import UserProfilePic from './components/UserProfilePic';

export const metadata = {
  title: 'Blog | Next App',
  description: 'Created by Dave',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <UserProfilePic />
        {children}
      </body>
    </html>
  );
}
