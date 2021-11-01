import Menu from "./Menu";
import Search from "../../components/UI/Search";

const Layout = ({ children }) => {
  return (
    <main>
      <Menu />
      <Search />
      {children}
    </main>
  );
};

export default Layout;
