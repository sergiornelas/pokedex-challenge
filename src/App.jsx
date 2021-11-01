import { Fragment } from "react";
import "./App.css";
import PokemonList from "./components/Pokemons/PokemonList";
import PokemonDetail from "./components/Pokemons/PokemonDetail";
import Search from "../src/components/UI/Search";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Fragment>
      <Search />
      <Switch>
        <Route path="/" exact>
          <PokemonList />
        </Route>
        <Route path="/:id">
          <PokemonDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}
// <Route path="/product-detail/:productId">

export default App;
