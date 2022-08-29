import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";

import styles from "./Header.module.css";

function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of delicios food!" />
      </div>
    </>
  );
}

export default Header;
