import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import styles from "./BlogSearch.module.scss";

export default withRouter(({ history }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue === "") return;
    setSearchValue("");
    history.push("/blog/search/" + searchValue);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.search}>
      <input
        type="text"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button>
        <i className="las la-search" />
      </button>
    </form>
  );
});
