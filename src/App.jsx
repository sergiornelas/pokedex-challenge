import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllPokemon from "../src/pages/AllPokemon";
import SinglePokemon from "../src/pages/SinglePokemon";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllPokemon />
        </Route>
        <Route path="/:pokeId">
          <SinglePokemon />
        </Route>
      </Switch>
    </Layout>
  );
}
// <Route path="*">
//   <NotFound/>
// </Route>
// <Route path="/product-detail/:productId">

export default App;
