import Head from "next/head";
import CHeader from "./header";
import CMain, { IMain } from "./main";

interface ILayout extends IMain {
  pageDescription: string;
}

const Clayout: React.FC<ILayout> = ({
  children,
  hasFooter,
  hasHeader,
  isRTL,
  pageDescription,
}) => {
  return (
    <main>
      <Head>
        <meta name="description" content={pageDescription} />
        <meta http-equiv="Content-Language" content="fa" />
      </Head>
      <CMain hasHeader={hasHeader} hasFooter={hasFooter} isRTL={isRTL}>
        {children}
      </CMain>
    </main>
  );
};

export default Clayout;
