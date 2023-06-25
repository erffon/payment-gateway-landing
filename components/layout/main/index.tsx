import { Children, Fragment, ReactComponentElement } from "react";
import CHeader from "../header";
import CFooter from "../footer";

export interface IMain {
  children: React.ReactNode;
  hasHeader: boolean;
  hasFooter: boolean;
  isRTL: boolean;
}

const CMain: React.FC<IMain> = ({
  children,
  hasFooter = true,
  hasHeader = true,
  isRTL = true,
}) => {
  return (
    <Fragment>
      <div dir={isRTL ? "rtl" : "ltr"} className="overflow-hidden">
        {hasHeader && <CHeader />}
        {children}
        {hasFooter && <CFooter />}
      </div>
    </Fragment>
  );
};

export default CMain;
