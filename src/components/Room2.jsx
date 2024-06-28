import React from "react";

import styles from "../styles/Room.module.css";

const Room2 = ({ id, withClient, withOperator }) => {

  return (
    <div className={styles.room}>
      <div>Чат № {id}</div>
      <div className={styles.roles}>
        {withClient && <div className={styles.client}></div>}
        {withOperator && <div className={styles.admin}></div>}
      </div>
    </div>
  );
};

export default Room2;
