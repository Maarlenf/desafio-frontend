/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {
  getLocation,
  getEpisodes,
  getCharacters,
  getMainCharacter,
  getCharacters1,
  getLocation1,
  getEpisodes1,
} from "../lib/getData";

export const DataContext = createContext(null);

const allCharacters = [].flat();
const allEpisodes = [].flat();
const allLocations = [].flat();
const getMainCharacterData = [].flat();

getCharacters().then((data) => {
  allCharacters.push(data.results);
});

for (let i = 1; i < 42; i++) {
  getCharacters1(i + 1).then((data) => {
    allCharacters.push(data.results);
  });
}

getLocation().then((data) => {
  allLocations.push(data.results);
});

for (let i = 1; i < 7; i++) {
  getLocation1(i + 1).then((data) => {
    allLocations.push(data.results);
  });
}

getEpisodes().then((data) => {
  allEpisodes.push(data.results);
});

for (let i = 1; i < 3; i++) {
  getEpisodes1(i + 1).then((data) => {
    allEpisodes.push(data.results);
  });
}

getMainCharacter().then((data) => {
  getMainCharacterData.push(data);
});

export const DataProvider = ({ children }) => {
  const [characters, setCharacters] = useState(allCharacters);
  const [location, setLocation] = useState(allLocations);
  const [episodes, setEpisodes] = useState(allEpisodes);
  const [mainCharacter, setMainCharacter] = useState(getMainCharacterData);

  return (
    <DataContext.Provider
      value={{
        characters,
        setCharacters,
        location,
        setLocation,
        episodes,
        setEpisodes,
        mainCharacter,
        setMainCharacter,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
