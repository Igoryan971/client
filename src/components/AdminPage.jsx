import React, { useEffect, useState } from "react";

import styles from "../styles/Admin.module.css";
import Room from "./Room";
import { Link, useLocation } from "react-router-dom";

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
  const { search } = useLocation();
  const [name1, setName1] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const name1 = searchParams.get("name");
    setName1(name1);
    console.log("Name parameter:", name1);
  }, [search]);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.admin_block}>
          <div className={styles.name_container}>
            <div className={styles.name}>Оператор:    {name1}</div>
          </div>
          <div className={styles.chats}>Чаты с клиентами :</div>
          <div className={styles.room_container}>
            {arrRooms.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/chat?name=${item.id}&room=${item.id}&id=operator}`}
                >
                  <Room id={item.id} status={item.status} key={item.id} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
