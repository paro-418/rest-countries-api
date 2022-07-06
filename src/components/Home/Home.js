import Header from "../Header/Header";
import classes from "./Home.module.css";
import Search from "../Search/Search";
import DropMenu from "../DropMenu/DropMenu";

const Home = () => {
  return (
    <main className={classes.home}>
      <Header />
      <div className={classes.forms}>
        <Search />
        <DropMenu />
      </div>
    </main>
  );
};

export default Home;
