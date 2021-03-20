import React, { useRef, useState } from "react";
import { useCustomState } from "../../../state/state";
import styles from "./VideoHeader.module.scss";
import THEME from "../../../state/theme";

export default () => {
  const state = useCustomState()[0];
  const [isPlay, setPlay] = useState(false);
  const ref = useRef();

  const playToogle = () => {
    isPlay ? ref.current.pause() : ref.current.play();
    setPlay(!isPlay);
  };

  return (
    <div className={styles.video}>
      <video ref={ref} src={state.data.video.header} type="video/mp4" />
      <div className={styles.intro}>
        <div>
          <span>Think.</span>
          <span>
            <b>Build.</b>
          </span>
          <span>Work.</span>
        </div>
        <button
          className={isPlay ? styles.pause : styles.play}
          style={{ borderColor: THEME.color }}
          onClick={playToogle}
        >
          <div className={styles.icon_wrapper}>
            <span
              style={{ background: THEME.color }}
              className={[styles.bar, styles.bar_1].join(" ")}
            />
            <span
              style={{ background: THEME.color }}
              className={[styles.bar, styles.bar_2].join(" ")}
            />
          </div>
        </button>
      </div>
    </div>
  );
};
