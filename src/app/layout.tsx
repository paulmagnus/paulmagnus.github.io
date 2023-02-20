import { Layout } from "./clientLayout";
import "./globals.scss";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul J Magnus - Software Developer",
  description: "Paul J. Magnus software developer at Epic Systems",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
