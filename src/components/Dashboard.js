import User from "./User";
import classes from "./Dashboard.module.css";
import Activities from "./Activities/Activities";
import { useState } from "react";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState("weekly");

  const selectDateHandler = (selectedDate) => {
    setSelectedDate(selectedDate);
  };

  return (
    <div className={classes.container}>
      <User onSelectDate={selectDateHandler} />
      <Activities selectedDate={selectedDate} />
    </div>
  );
}

export default Dashboard;
