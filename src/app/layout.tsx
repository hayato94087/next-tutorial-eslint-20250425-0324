import "@/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  description: "Generated by create next app",
  title: "Sample",
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="">{props.children}</body>
    </html>
  );
}
