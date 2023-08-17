const http = 'https://rickandmortyapi.com/api';
//characters":"https://rickandmortyapi.com/api/character
//"locations":"https://rickandmortyapi.com/api/location
//episodes":"https://rickandmortyapi.com/api/episode
export function getCharacters() {
    return fetch(`${http}/character`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }

  export function getCharacters1(page) {
    return fetch(`${http}/character/?page=${page}`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }


  export const getMainCharacter = () => {
   return getCharacters().then((res) => {
        let persona1="";
        let persona2="";
        let persona3="";
        let persona4="";
        let persona5="";
      
        const personaPrincipal1= res.results.find( personaPrincipal1 => personaPrincipal1.name === "Rick Sanchez" );
        const personaPrincipal2= res.results.find( personaPrincipal2 => personaPrincipal2.name === "Morty Smith" );
        const personaPrincipal3= res.results.find( personaPrincipal3 => personaPrincipal3.name === "Beth Smith" );
        const personaPrincipal4= res.results.find( personaPrincipal4 => personaPrincipal4.name === "Summer Smith" );
        const personaPrincipal5= res.results.find( personaPrincipal5 => personaPrincipal5.name === "Jerry Smith" );
    
        persona1 = personaPrincipal1
        persona2 = personaPrincipal2
        persona3 = personaPrincipal3
        persona4 = personaPrincipal4 
        persona5  = personaPrincipal5 
      
        const todosJuntos= [persona1, persona2,persona3,persona4,persona5];
        //console.log(todosJuntos)
        return todosJuntos;
    })        
    }

  export function getLocation() {
    return fetch(`${http}/location`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }

  export function getLocation1(page) {
    return fetch(`${http}/location/?page=${page}`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }

  export function getEpisodes() {
    return fetch(`${http}/episode`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }

  export function getEpisodes1(page) {
    return fetch(`${http}/episode/?page=${page}`, {
      method: "GET"
    })
      .then((res) => 
        res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }

export const season = [{
    id:1,
    name: "Season 1",
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
}, {
    id: 2,
    name: "Season 2",
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10]
},{
    id: 3,
    name: "Season 3",
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
},{
    id: 4,
    name: "Season 4",
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
},{
    id: 5,
    name: "Season 5",
    episodes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
]  



