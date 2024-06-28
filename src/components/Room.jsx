import React from "react";

import styles from "../styles/Room.module.css";

const Room = ({ id, status }) => {

  return (
    <div className={styles.room}>
      <div>{id}</div>
      <div className={styles.roles}>
        {status === 1 && <div className={styles.client}></div>}
        {status === 2 && <div className={styles.admin}></div>}
        {status === 4 && <div className={styles.question_closed}></div>}
        {status === 3 && (
          <>
            <div className={styles.client}></div>
            <div className={styles.admin}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Room;
