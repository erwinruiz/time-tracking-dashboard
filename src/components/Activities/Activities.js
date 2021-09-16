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
            hours = activity.daily.current;
            previous = activity.daily.previous;
            break;

          case "weekly":
            hours = activity.weekly.current;
            previous = activity.weekly.previous;
            break;

          case "monthly":
            hours = activity.monthly.current;
            previous = activity.monthly.previous;
            break;

          default:
            hours = activity.weekly.current;
            previous = activity.weekly.previous;
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
