import Button from "../Button/Button";
import classes from "./NoPage.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { useHistory } from "react-router-dom";

const NoPage = () => {
  const history = useHistory();
  const backHandler = () =>{
    history.push("/rest-countries-api-with-color-theme-switcher-master/home");
  }
  return (
    <main className={classes.noPage}>
      <h1 className={classes.heading}> No Country Found 😕.</h1>{" "}
      <h1 className={classes.heading}>
        Make sure country's name is correctly spelled.
      </h1>
      <Button callFunction={backHandler} className={classes.btn}>
        <MdKeyboardBackspace /> Home Page
      </Button>
    </main>
  );
};

export default NoPage;
