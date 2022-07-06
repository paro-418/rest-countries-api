import classes from "./Header.module.css";
import Button from "../Button/Button";
import { IoMoonOutline } from "react-icons/io5";
import { HiOutlineSun } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { themeSliceActions } from "../../Store/theme-store";

const Header = () => {
  const isLight = useSelector((state) => state.theme.light);
  const dispatch = useDispatch();

  const toggleThemeHandler = () => {
    dispatch(themeSliceActions.toggleTheme());
  };
  return (
    <header className={classes.header}>
      <h1>Where in the world?</h1>
      <Button callFunction={toggleThemeHandler} className = {classes.btn}>
        {isLight ? <IoMoonOutline /> : <HiOutlineSun />}
        {isLight ? "Dark Mode" : "Light Mode"}
      </Button>
    </header>
  );
};

export default Header;
