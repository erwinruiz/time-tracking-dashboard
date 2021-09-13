import User from "./User";
import classes from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={classes.container}>
      <User />
    </div>
  );
}

export default Dashboard;
