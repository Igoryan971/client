import React from "react";

import styles from "../styles/Admin.module.css";

const arrRooms = [
  {
    id: 1,
    inside: 0,
    status: 0,
  },
  {
    id: 2,
    inside: 0,
    status: 1,
  },
  {
    id: 3,
    inside: 0,
    status: 2,
  },
  {
    id: 4,
    inside: 0,
    status: 3,
  },
  {
    id: 5,
    inside: 0,
    status: 4,
  },
  {
    id: 6,
    inside: 0,
    status: 1,
  },
  {
    id: 7,
    inside: 0,
    status: 1,
  },
  {
    id: 8,
    inside: 0,
    status: 2,
  },
  {
    id: 9,
    inside: 0,
    status: 3,
  },
  {
    id: 10,
    inside: 0,
    status: 4,
  },
];

const AdminPage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.admin_block}>
          <div className={styles.name_container}>
            <div className={styles.name}>admin: Nika</div>
          </div>

          <div className={styles.chats}>Чаты с клиентами :</div>
          <div className={styles.room_container}>
            {arrRooms.map((item) => {
              return (
                <div className={styles.room}>
                  <div>{item.id}</div>
                  <div className={styles.roles}>
                  {item.status === 1 && <div className={styles.client}></div>}
                  {item.status === 2 && <div className={styles.admin}></div>}
                  {item.status === 4 && <div className={styles.question_closed}></div>}
                  {item.status === 3 && (
                    <>
                      <div className={styles.client}></div>
                      <div className={styles.admin}></div>
                    </>
                  )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
