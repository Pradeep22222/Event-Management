import React from "react";
import classes from "./event-list.module.css";
import { EventItem } from "./EventItem";
export const EventList = (props) => {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((item, i) => {
        return (
          <EventItem
            id={item.id}
            location={item.location}
            date={item.date}
            title={item.title}
            image={item.image}
          ></EventItem>
        );
      })}
    </ul>
  );
};
