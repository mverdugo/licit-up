import React from "react";
import styles from "./BlogPagination.module.scss";
import THEME from "../../../../../state/theme";

export default ({ amount, current, next, prev, goto }) => {
  const navigation = [];

  for (let i = 1; i <= amount; i++) {
    navigation.push(
      <li
        key={i}
        className={i === current ? styles.active : null}
        style={{ borderColor: THEME.color }}
      >
        <button onClick={() => goto(i)}>{i}</button>
      </li>
    );
  }
  return (
    <div className={styles.pagination}>
      <button
        onClick={current !== 1 ? prev : e => e.preventDefault()}
        className={current === 1 ? styles.disabled : null}
      >
        <i
          className="las la-long-arrow-alt-left"
          style={{ marginRight: "5px" }}
        />
        <span>Previous</span>
      </button>
      <ul>
        {current === amount && navigation[current - 3]}
        {navigation[current - 2]}
        {navigation[current - 1]}
        {navigation[current]}
        {current === 1 && navigation[current + 1]}
      </ul>
      <button
        onClick={current !== amount ? next : e => e.preventDefault()}
        className={current === amount ? styles.disabled : null}
      >
        <span>Next</span>
        <i
          className="las la-long-arrow-alt-right"
          style={{ marginLeft: "5px" }}
        />
      </button>
    </div>
  );
};
