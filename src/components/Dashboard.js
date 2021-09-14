import User from "./User";
import classes from "./Dashboard.module.css";
import Activities from "./Activities/Activities";


function Dashboard() {
  return (
    <div className={classes.container}>
      <User />
      <Activities />
    </div>
  );
}

export default Dashboard;
