import { Fragment } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AllPokemon from "../src/pages/AllPokemon";
import SinglePokemon from "../src/pages/SinglePokemon";

function App() {
  return (
    <Fragment>
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
    </Fragment>
  );
}
// <Route path="*">
//   <NotFound/>
// </Route>
// <Route path="/product-detail/:productId">

export default App;
