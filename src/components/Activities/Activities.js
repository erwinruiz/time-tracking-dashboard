import classes from "./Activities.module.css";
import { activities } from "../../db";
import Activity from "./Activity";

function Activities() {
  return (
    <div className={classes.container}>
      {activities.map((activity, i) => (
        <Activity
          key={i}
          title={activity.title}
          bgColor={activity.bgColor}
          imgUrl={activity.imgUrl}
          imgAlt={activity.imgAlt}
          daily={activity.daily}
          previousDaily={activity.previousDaily}
          weekly={activity.weekly}
          previousWeekly={activity.previousWeekly}
          monthly={activity.monthly}
          previousMonthly={activity.previousMonthly}
        />
      ))}
    </div>
  );
}

export default Activities;
