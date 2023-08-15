const http = "https://rickandmortyapi.com/api/";

export function getCharacters() {
    return fetch(`${http}character`, {
      method: "GET",
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }