import style from "./card.module.css";

const Card = () => {
  return (
    <main className={style.main}>
      <div className={style.container}>
        <div className={style["card-container"]}>
          <h2 className={style.title}>Invitation Card</h2>
          <h3 className={style.subtitle}>Charisma Group</h3>
          <img
            src="/assets/images/CharismaWebsite.svg"
            alt="qr code"
            className={style.qrcode}
          />
          <div className={style.coupon}>20% coupon</div>
        </div>
      </div>
    </main>
  );
};

export default Card;
