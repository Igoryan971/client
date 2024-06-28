import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "../styles/Main.module.css";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
  ID: "id",
};

const Main = () => {
  const { NAME, ROOM, ID } = FIELDS;

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "", [ID]: "" });
  const [isAdmin, setIsAdmin] = useState(false);

  const isAdminCheck = values[ID] === "operator";

  useEffect(() => {
    setIsAdmin(isAdminCheck);
  }, [isAdminCheck]);

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    if (!values[NAME] || !values[ID]) {
      e.preventDefault();
    }
  };
  const rooms = ["1", "2", "3", "4", "5"];

  const isOperator = "/admin";
  const isClient = `/chat?name=${values[NAME]}&room=${rooms[0]}&id=${values[ID]}`;
  const operatorCheck = isAdmin ? isOperator : isClient;

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
              name="id"
              placeholder="Роль"
              value={values[ID]}
              className={styles.input}
              onChange={handleChange}
              autoComplete="off"
              required
            />
          </div>

          <Link
            className={styles.group}
            onClick={handleClick}
            to={operatorCheck}>
            <button type="submit" className={styles.button}>
              Присоедениться
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;
