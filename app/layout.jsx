import './globals.css';

export const metadata = {
  title: 'Data Science Pro',
  description: 'Professional DS/ML study hub for students',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
