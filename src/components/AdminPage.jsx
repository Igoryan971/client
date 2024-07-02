import React, { useEffect, useState } from "react";

import styles from "../styles/Admin.module.css";
import Room from "./Room";
import { Link, useLocation } from "react-router-dom";
import { host } from "../config";
import Room2 from "./Room2";

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

  const [ roomData, setRoomData ] = useState([]);

  const filterRoomData = roomData.filter((item) => item.withClient);

  useEffect(() => {
    const response = fetch(host + "list_all_rooms/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    response.then((data) => {
      const a = data.json();
      a.then((data) => {
        console.log("data", data);
        setRoomData(data);
      });
    });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.admin_block}>
          <div className={styles.name_container}>
            <div className={styles.name}>Оператор: {name1}</div>
          </div>
          <div className={styles.chats}>Чаты с клиентами :</div>
          <div className={styles.room_container}>
            {/* {arrRooms.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={`/chat?name=${item.id}&room=${item.id}&id=operator`}
                >
                  <Room id={item.id} status={item.status} key={item.id} />
                </Link>
              );
            })} */}

            {filterRoomData.map((item) => {

              return (
                <Link
                  key={item.roomId}
                  to={!item.withOperator ? `/chat?name=${name1}&room=${item.roomId}&role=operator` : null}
                >
                  <Room2 id={item.roomId} withClient={item.withClient} withOperator={item.withOperator} key={item.roomId} />
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
