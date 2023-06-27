import Clayout from "@/components/layout/layout";
import { homeContent } from "@/contents/homepage/data";

export default function Home() {
  return (
    <Clayout
      pageDescription={"first page"}
      hasHeader={true}
      hasFooter={true}
      isRTL={true}
      classNames=""
    >
      <main>
        <div>
          <h1>{homeContent.title}</h1>
          <h2>{homeContent.title}</h2>
        </div>
        <div></div>
      </main>
    </Clayout>
  );
}
