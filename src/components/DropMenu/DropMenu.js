import classes from "./DropMenu.module.css";
import { useDispatch } from "react-redux";
import { regionWiseFetch } from "../../Store/data-store";

const DropMenu = () => {
  const dispatch = useDispatch();

  const regionSelectedHandler = (event) => {
    const countrySelected = event.target.value;
    dispatch(
      regionWiseFetch("https://restcountries.com/v3.1/all", countrySelected)
    );
  };
  return (
    <select onChange={regionSelectedHandler} className={classes.select}>
      <option className={classes.option} value="#">
        Filter by region
      </option>
      <option className={classes.option} value="africa">
        Africa
      </option>
      <option className={classes.option} value="america">
        America
      </option>
      <option className={classes.option} value="asia">
        Asia
      </option>
      <option className={classes.option} value="europe">
        Europe
      </option>
      <option className={classes.option} value="ocenia">
        Ocenia
      </option>
    </select>
  );
};

export default DropMenu;
