import classes from "./Activity.module.css";

function Activity(props) {
  const {
    title,
    bgColor,
    imgUrl,
    imgAlt,
    daily,
    previousDaily,
    weekly,
    previousWeekly,
    monthly,
    previousMonthly,
  } = props;

  return (
    <div
      className={classes.container}
      style={{ backgroundColor: `var(${bgColor})` }}
    >
      <div className={classes.activityLogo}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className={classes.activity}>
        <div className={classes.header}>
          <h3>{title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="ellipsis icon" />
        </div>
        <div className={classes.report}>
          <p className={classes.hours}>{weekly}hrs</p>
          <p className={classes.previous}>
            Last {"week"} - {previousWeekly}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
