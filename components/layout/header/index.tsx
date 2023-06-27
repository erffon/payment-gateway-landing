import Image from "next/image";
import logo from "./assets/logo.png";
import style from "./header.module.css";
import { headerContent } from "../../../contents/homepage/data";

const CHeader = () => {
  return (
    <header className={style.container} dir="rtl">
      <div className="relative">
        <Image src={logo} alt="website logo" width={80} height={80} />
      </div>
      <div className="flex justify-center items-center">
        <ul className={style["links-container"]}>
          {headerContent.links.map((item) => {
            return <li className={style.links}>{item.text}</li>;
          })}
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <button className={style.cta}>{headerContent.ctaButton}</button>
      </div>
    </header>
  );
};

export default CHeader;
