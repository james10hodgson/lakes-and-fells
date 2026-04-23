export const metadata = {
  title: "Lakes and Fells Property Management",
  description: "Holiday let management in Cumbria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
