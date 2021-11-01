const { useState, useEffect } = require("react");
const URL = "https://pokeapi.co/api/v2/pokemon";

export const useHttp = () => {
  const [pokeArray, setPokeArray] = useState([]);

  const getPokeData = async () => {
    //HERE
    setPokeArray([]);
    try {
      const jsonData = await fetch(URL);
      const cleanData = await jsonData.json();

      cleanData.results.forEach(async (element) => {
        const fetchPokeData = await fetch(element.url);
        const data = await fetchPokeData.json();

        const obj = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          types: data.types,
          default_img: data.sprites.other["official-artwork"].front_default,
          front_img: data.sprites.front_default,
          back_img: data.sprites.back_default,
          front_shiny: data.sprites.front_shiny,
          back_shiny: data.sprites.back_shiny,
        };
        setPokeArray((prev) => [...prev, obj]);
      });
    } catch (error) {
      console.log("haha todo tronco xd", error);
    }
  };

  useEffect(() => {
    getPokeData();
  }, []);

  return pokeArray;
};
