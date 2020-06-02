import React from "react";
import style from "./ListItem.module.css";

const ListItem = ({ list }) => (
    <ul className={style.listContainer}>
      {Object.entries(list).map(([key, value], index) => [
        <li key={index}>
          {key}: {value}
        </li>,
      ])}
    </ul>
);

export default ListItem;
