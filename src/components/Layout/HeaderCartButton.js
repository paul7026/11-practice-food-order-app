import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";

import styles from "./HeaderCartButton.module.css";

function HeaderCartButton({ onShowCart }) {
  const [btnIsHighliggted, setBtnIsHighliggted] = useState(false);

  const ctx = useContext(CartContext);

  const { items } = ctx;

  const numberofCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${styles.button} ${btnIsHighliggted ? styles.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighliggted(true);

    const timer = setTimeout(() => {
      setBtnIsHighliggted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberofCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
