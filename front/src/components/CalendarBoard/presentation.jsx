import React from "react";
import { GridList, Typography } from "@material-ui/core";
import CalendarElements from "../CalendarElements";
import * as styles from "./style.css";

const days = ["日", "月", "火", "水", "木", "金", "土"];

const CalendarBoard = ({ calendar }) => {
  console.log(calendar);
  
  return (
    <div className={styles.container}>
      <GridList cellHeight="auto" className={styles.grid} cols={7} spacing={0}>
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map(c => (
          <li key={c.toISOString()}>
            <CalendarElements day={c} />
          </li>
        ))}
      </GridList>
    </div>
  );
};


export default CalendarBoard;