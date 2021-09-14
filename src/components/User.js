import { useState } from "react";
import classes from "./User.module.css";

function User(props) {
  const [selectedDate, setSelectedDate] = useState("weekly");

  const dateHandler = (selectedDate) => {
    setSelectedDate(selectedDate);
    props.onSelectDate(selectedDate);
  };

  return (
    <div className={classes.container}>
      <div className={classes.user}>
        <img src="./images/image-jeremy.png" alt="user" />
        <div className={classes.userData}>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className={classes.dateOptions}>
        <p
          onClick={() => dateHandler("daily")}
          className={`${selectedDate === "daily" && classes.activeDate}`}
        >
          Daily
        </p>
        <p
          onClick={() => dateHandler("weekly")}
          className={`${selectedDate === "weekly" && classes.activeDate}`}
        >
          Weekly
        </p>
        <p
          onClick={() => dateHandler("monthly")}
          className={`${selectedDate === "monthly" && classes.activeDate}`}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}

export default User;
