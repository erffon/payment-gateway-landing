import Image from "next/image";
import logo from "./assets/logo.png";
import style from "./header.module.css";

const CHeader = () => {
  return (
    <header
      className="overflow-hidden flex justify-between py-5 mb-10 bg-slate-black"
      dir="rtl"
    >
      <div className="relative">
        <Image src={logo} alt="website logo" width={80} height={80} />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex justify-around py-4 backdrop-blur-lg bg-zinc-700 rounded-full border-zinc-400/80 border w-96">
          <li className={style.links}>خانه</li>
          <li className={style.links}>درباره</li>
          <li className={style.links}>ارتباط با من</li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <button>پرداخت</button>
      </div>
    </header>
  );
};

export default CHeader;
