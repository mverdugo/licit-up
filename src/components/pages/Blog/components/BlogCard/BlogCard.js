import React from "react";
import styles from "./BlogCard.module.scss";
import { Link } from "react-router-dom";
import { CardImage } from "../../../../ui";
import { Button } from "../../../../elements";

export default ({ post, author = "", category = "", layout = "grid" }) => {
  return (
    <CardImage image={post.image} label={category} layout={layout}>
      <div className={styles.card}>
        <h3>
          <Link to={"/blog/" + post.id}>{post.title}</Link>
        </h3>
        <div className={styles.extra}>
          <Link to={"/blog/date/" + post.posting_date}>
            <i className="las la-calendar" />
            {post.posting_date.split(",")[0]}
          </Link>
          <Link to={"/blog/user/" + author.id}>
            <i className="las la-user-tie" />
            {author.name}
          </Link>
        </div>
        <p>{post.short}</p>

        <div className={styles.btn}>
          <Button to={"/blog/" + post.id} hoverType="solid-gray-tb">
            Read More
          </Button>
        </div>
      </div>
    </CardImage>
  );
};
