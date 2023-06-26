import Clayout from "@/components/layout/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Clayout
      pageDescription={"first page"}
      hasHeader={true}
      hasFooter={true}
      isRTL={true}
      classNames="bg-zinc-900"
    >
      <main>
        <div>درگاه پرداختی همه‌کاره برای </div>
        <div></div>
      </main>
    </Clayout>
  );
}
