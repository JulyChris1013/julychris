import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from "antd";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "July & Chris",
  description: "Casamiento de July y Chris"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "white" }}>
        <AntdRegistry>
          <ConfigProvider
          theme={{
            components:{
              Button: {
                colorPrimary: "#E5E8E8",
                colorPrimaryHover: "#E5E8E8",
                colorPrimaryBorder: "#E5E8E8",
                primaryColor: "black",
                defaultHoverBg: "black",
                borderRadius: 15
              }
            }
          }}>
            {children}
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
