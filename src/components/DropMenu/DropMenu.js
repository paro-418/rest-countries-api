import classes from "./DropMenu.module.css";

const DropMenu = () => {
  return (
    <select className={classes.select}>
      <option className={classes.option} value="#">
        Filter by region
      </option>
      <option className={classes.option} value="BMW">
        {" "}
        Africa
      </option>
      <option className={classes.option} value="Mercedes">
        {" "}
        America
      </option>
      <option className={classes.option} value="Audi">
        {" "}
        Asia
      </option>
      <option className={classes.option} value="Skoda">
        {" "}
        Europe
      </option>
      <option className={classes.option} value="Skoda">
        {" "}
        Ocenia
      </option>
    </select>
  );
};

export default DropMenu;
