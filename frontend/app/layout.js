export const metadata = {
  title: "Remote Browser",
  description: "Remote browser control system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}