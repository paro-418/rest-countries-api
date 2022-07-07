import Header from "../Header/Header";
import classes from "./Home.module.css";
import Search from "../Search/Search";
import DropMenu from "../DropMenu/DropMenu";
import CountryContainer from "../CountryContainer/CountryContainer";

const Home = () => {
  return (
    <main className={classes.home}>
      <Header />
      <div className={classes.forms}>
        <Search />
        <DropMenu />
      </div>
      <CountryContainer />
    </main>
  );
};

export default Home;
