import React, { Fragment, useState, useEffect } from "react";
import { Link as ScrollTo, animateScroll as scroll } from "react-scroll";
import styles from "./Preview.module.scss";
import THEME from "../../../state/theme";
import { Link } from "react-router-dom";

const bg = require("../../../assets/preview_bg.jpg");
const footer = require("../../../assets/previews/bg.jpg");
const demo1 = require("../../../assets/previews/1.jpg");
const demo2 = require("../../../assets/previews/2.jpg");
const demo3 = require("../../../assets/previews/3.jpg");
const demo4 = require("../../../assets/previews/4.jpg");
const demo5 = require("../../../assets/previews/5.jpg");
const demo6 = require("../../../assets/previews/6.jpg");
const demo7 = require("../../../assets/previews/7.jpg");
const demo8 = require("../../../assets/previews/8.jpg");
const demo9 = require("../../../assets/previews/9.jpg");
const demo10 = require("../../../assets/previews/10.jpg");
const demo11 = require("../../../assets/previews/11.jpg");
const demo12 = require("../../../assets/previews/12.jpg");
const demo13 = require("../../../assets/previews/13.jpg");

export default () => {
  const [sticky, setSticky] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleResize = () => {
    setSticky(window.pageYOffset > 300 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <div className={styles.bg}>
        <div
          style={{
            backgroundImage: "url(" + bg + ")",
          }}
        />
      </div>
      <div
        className={[styles.sidebar_wrapper, !sidebar && styles.hidden].join(
          " "
        )}
      >
        <div className={styles.sidebar}>
          <i onClick={() => setSidebar(!sidebar)} className="las la-times" />
          <Menu sidebar={sidebar} setSidebar={setSidebar} />
        </div>
        <figure
          onClick={() => setSidebar(!sidebar)}
          className={styles.backdrop}
        />
      </div>

      <div className={[styles.sticky, !sticky && styles.hidden].join(" ")}>
        <div>
          <Header sidebar={sidebar} setSidebar={setSidebar} />
        </div>
      </div>

      <a
        href="/"
        className={[styles.upbtn, !sticky && styles.hidden].join(" ")}
        onClick={(e) => {
          e.preventDefault();
          scroll.scrollToTop();
        }}
      >
        <i className="las la-angle-up" />
      </a>

      <div className={styles.intro}>
        <Header sidebar={sidebar} setSidebar={setSidebar} />
        <div className={styles.title}>
          <h1>
            React Construction
            <br />
            Template
          </h1>

          <ScrollTo
            className={[styles.btn, styles.yellow].join(" ")}
            to="demos"
            smooth={true}
            duration={500}
            offset={-110}
          >
            Check demos
            <i
              style={{ marginLeft: "1rem", marginRight: "-5px" }}
              className="las la-long-arrow-alt-right"
            />
          </ScrollTo>
        </div>
      </div>
      <div id="features" className={styles.features}>
        <div>
          <div className={styles.feature}>
            <i className="lab la-react" style={{ color: THEME.color }} />
            <h3>Latest React 16.8+</h3>
            <p>
              We used latest react version with hooks and functional components.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="las la-desktop" style={{ color: THEME.color }} />
            <h3>Responsive design</h3>
            <p>
              Your site will always look great on any browsers or mobile
              devices.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="las la-comments" style={{ color: THEME.color }} />
            <h3>Friendly support</h3>
            <p>
              Our support team is available 24/7 to provide any help with
              website.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="las la-file-alt" style={{ color: THEME.color }} />
            <h3>Documentation</h3>
            <p>
              All our digital products come with a thorough documentation file.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i
              className="las la-cloud-upload-alt"
              style={{ color: THEME.color }}
            />
            <h3>Free updates</h3>
            <p>Purchase only once and get life-time free updates.</p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="las la-text-width" style={{ color: THEME.color }} />
            <h3>Google Fonts</h3>
            <p>You can change and use any of more then 600+ Google Fonts.</p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="lab la-wpforms" style={{ color: THEME.color }} />
            <h3>Contact form</h3>
            <p>
              Working contact form with EmailJS. No server-side code needed.
            </p>
          </div>
        </div>
        <div>
          <div className={styles.feature}>
            <i className="lab la-sass" style={{ color: THEME.color }} />
            <h3>Sass Avaliable</h3>
            <p>Styles in this template build on Sass preprocessor</p>
          </div>
        </div>
      </div>
      <div id="demos" className={styles.demo_wrapper}>
        <div className={styles.demos}>
          <div className={styles.header}>
            <h2>Homepage Layouts</h2>
            <p>
              Holisticly architect user-centric e-commerce through empowered
              relationships. Intrinsicly evolve team driven information via
              unique partnerships. Monotonectally conceptualize functionalized
              e-commerce.
            </p>
          </div>
          <Link to="/home">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo1 + ") center/cover" }}
              />
              <h3>Home Slider</h3>
            </div>
          </Link>
          <Link to="/home/paralax-image">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo2 + ") center/cover" }}
              />
              <h3>Home Paralax</h3>
            </div>
          </Link>
          <Link to="/home/video-background">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo3 + ") center/cover" }}
              />
              <h3>Home Video</h3>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={styles.demo_wrapper}
        style={{ background: "rgb(230,230,230" }}
      >
        <div className={styles.demos}>
          <div className={styles.header}>
            <h2>Other Layouts</h2>
            <p>
              Holisticly architect user-centric e-commerce through empowered
              relationships. Intrinsicly evolve team driven information via
              unique partnerships. Monotonectally conceptualize functionalized
              e-commerce.
            </p>
          </div>
          <Link to="/about-us">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo4 + ") center/cover" }}
              />
              <h3>About Us</h3>
            </div>
          </Link>
          <Link to="/services">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo5 + ") center/cover" }}
              />
              <h3>Services</h3>
            </div>
          </Link>
          <Link to="/portfolio">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo6 + ") center/cover" }}
              />
              <h3>Portfolio</h3>
            </div>
          </Link>
          <Link to="/blog-grid-left-sidebar">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo7 + ") center/cover" }}
              />
              <h3>Blog Grid</h3>
            </div>
          </Link>
          <Link to="/blog-list-right-sidebar">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo8 + ") center/cover" }}
              />
              <h3>Blog List</h3>
            </div>
          </Link>
          <Link to="/contacts">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo9 + ") center/cover" }}
              />
              <h3>Contacts</h3>
            </div>
          </Link>
          <Link to="/services/0">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo10 + ") center/cover" }}
              />
              <h3>Service Details</h3>
            </div>
          </Link>
          <Link to="/team/0">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo11 + ") center/cover" }}
              />
              <h3>Team Card</h3>
            </div>
          </Link>
          <Link to="/portfolio/0">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo12 + ") center/cover" }}
              />
              <h3>Project Card</h3>
            </div>
          </Link>
          <Link to="/blog/post_0">
            <div className={styles.demo}>
              <figure
                style={{ background: "url(" + demo13 + ") center/cover" }}
              />
              <h3>Post Single</h3>
            </div>
          </Link>
        </div>
      </div>
      <div
        className={styles.footer}
        style={{ background: "url(" + footer + ") center/cover" }}
      >
        <h1>Like this? Purchase BuildStar Now!</h1>
        <span>Modern, creative, with nice features and easy to customize</span>
        <a className={[styles.btn, styles.yellow].join(" ")} href="/">
          <i
            style={{ marginRight: "1rem", marginLeft: "-5px" }}
            className="las la-plus"
          />
          Purchase now
        </a>
      </div>
    </Fragment>
  );
};

const Header = ({ sidebar, setSidebar }) => (
  <div className={styles.header}>
    <figure className={styles.logo}>
      <i className="las la-industry" />
      <span>
        Build<b>Stars.</b>
      </span>
    </figure>

    <Menu sidebar={sidebar} setSidebar={setSidebar} />

    <a
      className={[styles.btn, styles.white, styles.purchase].join(" ")}
      href="/"
    >
      <i
        style={{ marginRight: "1rem", marginLeft: "-5px" }}
        className="las la-plus"
      />
      Purchase now
    </a>

    <div className={styles.mobile_nav}>
      <a
        className={[styles.btn, styles.white, styles.left].join(" ")}
        href="/"
        style={{ marginRight: "1rem", paddingLeft: "3.5rem" }}
      >
        Purchase now
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          setSidebar(!sidebar);
        }}
        className={[styles.btn, styles.yellow, styles.right].join(" ")}
        href="/"
      >
        <i style={{ marginRight: ".5rem" }} className="las la-bars" />
      </a>
    </div>
  </div>
);

const Menu = ({ sidebar, setSidebar }) => (
  <ul className={styles.menu}>
    <li>
      <ScrollTo
        className={styles.link}
        to="demos"
        smooth={true}
        duration={500}
        offset={-110}
        onClick={() => (sidebar ? setSidebar(!sidebar) : null)}
      >
        Demos
      </ScrollTo>
    </li>
    <li>
      <ScrollTo
        className={styles.link}
        to="features"
        smooth={true}
        duration={500}
        offset={-200}
        onClick={() => (sidebar ? setSidebar(!sidebar) : null)}
      >
        Features
      </ScrollTo>
    </li>
    <li>
      <a href="/">Documentation</a>
    </li>
    <li>
      <a href="/">Support</a>
    </li>
  </ul>
);
