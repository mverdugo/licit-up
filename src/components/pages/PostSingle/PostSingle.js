import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./PostSingle.module.scss";
import { Header } from "../../widgets";
import { useParams } from "react-router-dom";
import { useCustomState } from "../../../state/state";
import Layout from "../../layouts/Layout/Layout";
import THEME from "../../../state/theme";

export default () => {
  const state = useCustomState()[0];
  const { post_id } = useParams();

  const post = state.data.posts.filter(
    (post) => post.id.toString() === post_id
  )[0];
  const author = state.data.users.filter(
    (user) => user.id.toString() === post.user_id
  )[0];
  const category = state.data.categories.filter(
    (cat) => cat.id === post.category_id.toString()
  )[0];
  const related = state.data.posts.filter(
    (post) => category.id === post.category_id.toString()
  );

  const article = post.full.split("<p>").map((paragraph, index) => (
    <p className={index === 0 ? styles.lead : null} key={index}>
      {paragraph}
    </p>
  ));

  const relatedPosts = related
    .filter((item) => item.id !== post.id)
    .map((item, index) => (
      <Link to={"/blog/" + item.id} key={index} className={styles.card}>
        <figure
          style={{ background: "url(" + item.image + ") center/cover" }}
        />
        <span style={{ borderColor: THEME.color }}>{item.title}</span>
      </Link>
    ));

  if (post.quote) {
    article.splice(
      3,
      0,
      <span
        key={Math.random()}
        className={styles.quote}
        style={{ color: THEME.color }}
      >
        " {post.quote} "
      </span>
    );
  }

  return (
    <Fragment>
      <Header img={post.image}>{post.title}</Header>

      <Layout col="1">
        <div className={styles.breadcrumbs} style={{ color: THEME.color }}>
          <Link to="/blog-grid-left-sidebar">Blog</Link>
          <i className="las la-long-arrow-alt-right" />
          <Link to={"/blog/cats/" + post.category_id}>{category.title}</Link>
          <i className="las la-long-arrow-alt-right" />
          <span>{post.title}</span>
        </div>
      </Layout>

      <Layout col="2" padding>
        <div>
          <figure
            className={styles.image}
            style={{ background: "url(" + post.image + ") center/cover" }}
          />
        </div>
        <article className={styles.article}>{article}</article>
      </Layout>

      <Layout col="1">
        <figure style={{ height: "1px", background: "#ccc" }} />
        <div className={styles.author}>
          <div className={styles.photo}>
            <figure
              style={{
                background: "url(" + author.img + ") center/cover",
              }}
            />
            <div className={styles.social}>
              <i className="lab la-twitter" />
              <i className="lab la-facebook-f" />
              <i className="lab la-instagram" />
            </div>
          </div>

          <div className={styles.info}>
            <h3>{author.name}</h3>
            <p>{author.about}</p>
          </div>
        </div>
      </Layout>

      <Layout col="2">
        {relatedPosts[0]}
        {relatedPosts[1]}
      </Layout>
    </Fragment>
  );
};
