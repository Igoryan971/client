import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { host } from "../config";

import styles from "../styles/Main.module.css";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
  ROLE: "role",
};

const Main = () => {
  const { NAME, ROOM, ROLE } = FIELDS;
  const navigate = useNavigate();

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "", [ROLE]: "" });
  const [isAdmin, setIsAdmin] = useState(false);

  const isAdminCheck = values[ROLE] === "operator";

  useEffect(() => {
    setIsAdmin(isAdminCheck);
  }, [isAdminCheck]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  //   const handleClick = (e) => {
  //     if (!values[NAME] || !values[ROLE]) {
  //       e.preventDefault();
  //     }
  //   };

  const [linkToJoin, setlinkToJoin] = useState(null);

  const handleJoinChat = async () => {
    console.log("click");
    try {
      const response = await fetch(host + "list_for_client/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json(); // Parse the JSON-formatted response
        console.log(data);
        const urlOperator = `/admin?name=${values[NAME]}`;
        const urlClient = `/chat?name=${values[NAME]}&room=${data[0]}&role=${values[ROLE]}`;
        const link = isAdmin ? urlOperator : urlClient;
        console.log(link);
        navigate(link);
      } else {
        // Error handling for non-200 status
      }
    } catch (error) {
      // Network error handling
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Наш чат</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Имя пользователя"
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="role"
              placeholder="Роль"
              value={values[ROLE]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div className={styles.group}>
            <button
              type="button"
              className={styles.button}
              onClick={handleJoinChat}>
              Присоедениться
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Main;
