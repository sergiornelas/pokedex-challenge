import { Fragment } from "react";
import "./App.css";
import PokemonList from "./components/Pokemons/PokemonList";
import PokemonDetail from "./components/Pokemons/PokemonDetail";
// import Search from "../src/components/UI/Search";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Fragment>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <PokemonList />
          </Route>
          <Route path="/:pokeId">
            <PokemonDetail />
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
