import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "エクセレントショップうたや | 福岡県全域・近隣エリアの屋根工事・雨樋工事",
  description:
    "福岡県全域を中心に、県外の近隣エリアの屋根工事・雨樋工事・リフォーム工事へ対応。見積もり無料。お問い合わせ後の営業電話はいたしません。",
  openGraph: {
    title: "エクセレントショップうたや",
    description:
      "福岡県全域・近隣エリアの屋根・雨どい工事に対応。無料見積もり、営業電話なし、職人が直接対応します。",
    type: "website",
    locale: "ja_JP"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
