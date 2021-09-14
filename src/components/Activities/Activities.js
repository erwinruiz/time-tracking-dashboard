import classes from "./Activities.module.css";
import { activities } from "../../db";
import Activity from "./Activity";

function Activities(props) {
  const { selectedDate } = props;

  return (
    <div className={classes.container}>
      {activities.map((activity, i) => {
        let hours;
        let previous;
        switch (selectedDate) {
          case "daily":
            hours = activity.daily;
            previous = activity.previousDaily;
            break;

          case "weekly":
            hours = activity.weekly;
            previous = activity.previousWeekly;
            break;

          case "monthly":
            hours = activity.monthly;
            previous = activity.previousMonthly;
            break;

          default:
            hours = activity.weekly;
            previous = activity.previousWeekly;
            break;
        }

        return (
          <Activity
            key={i}
            title={activity.title}
            imgUrl={activity.imgUrl}
            imgAlt={activity.imgAlt}
            hours={hours}
            previousHours={previous}
            previous={selectedDate}
          />
        );
      })}
    </div>
  );
}

export default Activities;
