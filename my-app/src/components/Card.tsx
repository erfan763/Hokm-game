import React from "react";
import styles from "../styles/Card.module.css";

type CardProps = {
  value: string;
  suit: string;
  hidden?: boolean;
};

const Card: React.FC<CardProps> = ({ value, suit, hidden }) => {
  const getColor = () => {
    if (suit === "khaj" || suit === "pick") {
      return styles.black;
    } else {
      return styles.red;
    }
  };
  const getSuit = () => {
    if (suit === "khaj") {
      return "♣";
    } else if (suit === "pick") {
      return "♠";
    } else if (suit === "khesht") {
      return "♦";
    } else return "❤";
  };

  const getCard = () => {
    if (hidden) {
      return <div className={styles.hiddenCard} />;
    } else {
      return (
        <div className={styles.card}>
          <div className={getColor()}>
            <h1 className={styles.value}>{value}</h1>
            <h1 className={styles.suit}>{getSuit()}</h1>
          </div>
        </div>
      );
    }
  };

  return <>{getCard()}</>;
};

export default Card;
