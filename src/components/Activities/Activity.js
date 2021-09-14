import classes from "./Activity.module.css";

function Activity(props) {
  const { title, imgUrl, imgAlt, hours, previousHours, previous } = props;

  let ModifiedPrevious;
  if (previous === "daily") {
    ModifiedPrevious = "day";
  } else {
    ModifiedPrevious = previous.substring(0, previous.length - 2);
  }

  let CSSClasses = classes.container;

  switch (title) {
    case "Work":
      CSSClasses += ` ${classes.work}`;
      break;

    case "Play":
      CSSClasses += ` ${classes.play}`;
      break;

    case "Study":
      CSSClasses += ` ${classes.study}`;
      break;

    case "Exercise":
      CSSClasses += ` ${classes.exercise}`;
      break;

    case "Social":
      CSSClasses += ` ${classes.social}`;
      break;

    case "Self Care":
      CSSClasses += ` ${classes.selfcare}`;
      break;

    default:
      CSSClasses = classes.container;
      break;
  }

  return (
    <div className={CSSClasses}>
      <div className={classes.activityLogo}>
        <img src={imgUrl} alt={imgAlt} />
      </div>
      <div className={classes.activity}>
        <div className={classes.header}>
          <h3>{title}</h3>
          <img src="./images/icon-ellipsis.svg" alt="ellipsis icon" />
        </div>
        <div className={classes.report}>
          <p className={classes.hours}>{hours}hrs</p>
          <p className={classes.previous}>
            Last {ModifiedPrevious} - {previousHours}hrs
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
