import classes from "./Search.module.css";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className={classes.search}>
      <BiSearch />
      <input type="text" placeholder="Search for a country" className={`${classes.input}`}/>
    </div>
  );
};

export default Search;
