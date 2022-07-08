import classes from "./Button.module.css";
import { useSelector } from "react-redux";

const Button = (props) => {
  const light = useSelector((state) => state.theme.light);
  return (
    <button
      type={props.type}
      onClick={props.callFunction}
      className={`${props.className} ${light ? classes.btn : ""} ${
        !light ? classes.btnDark : ""
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
