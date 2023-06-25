import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import CHeader from "@/components/layout/header";
import Clayout from "@/components/layout/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Clayout
      pageDescription={"first page"}
      hasHeader={true}
      hasFooter={true}
      isRTL={true}
    >
      hello
    </Clayout>
  );
}
