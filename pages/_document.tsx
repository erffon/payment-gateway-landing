import CFooter from "@/components/layout/footer";
import CHeader from "@/components/layout/header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <CHeader />
      <body>
        <Main />
        <NextScript />
      </body>
      <CFooter />
    </Html>
  );
}
