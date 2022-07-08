import classes from "./CountryCard.module.css";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const CountryCard = (props) => {
  const history = useHistory();
  const light = useSelector((state) => state.theme.light);
  const countryClickHandler = (event) => {
    const countryTargeted =
      event.currentTarget.childNodes[1].children[0].textContent;
    history.push(`/home/${countryTargeted}`);
  };
  return (
    <article
      className={`${classes.card} ${!light ? classes.cardDark : ""}`}
      onClick={countryClickHandler}
    >
      <div className={classes.flag}>
        <img src={props.flag} className={classes.flagImage} />
      </div>
      <div className={classes.text}>
        <h4 className={`${classes.name} ${!light ? classes.nameDark : ""}`}>
          {props.name}
        </h4>
        <div className={classes.allInfo}>
          <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
            Population &nbsp;:&nbsp;
            <span className={classes.population}>
              {(props.population / 1000000).toLocaleString()} M
            </span>
          </p>
          <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
            Region&nbsp;:&nbsp;
            <span className={classes.region}>{props.region}</span>
          </p>
          <p className={`${classes.p} ${!light ? classes.pDark : ""}`}>
            Capital&nbsp;:&nbsp;
            <span className={classes.capital}>
              {props.capital ? props.capital[0] : "no Capital"}
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CountryCard;
