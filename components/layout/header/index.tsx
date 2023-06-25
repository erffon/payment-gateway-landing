import Image from "next/image";
import logo from "./assets/logo.png";

const CHeader = () => {
  return (
    <header className="overflow-hidden flex" dir="rtl">
      <div className="relative w-20 h-20">
        <Image src={logo} alt="website logo" fill />
      </div>
      <div className="flex justify-center items-center">
        <ul className="flex">
          <li>خانه</li>
          <li>درباره ما</li>
          <li>ارتباط با ما</li>
        </ul>
      </div>
      <div></div>
    </header>
  );
};

export default CHeader;
