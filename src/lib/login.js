const stringJSON = "application/json";
const regres = "https://reqres.in/";

export function tryLogin(email, password) {
    return fetch(`${regres}api/login`, {
      method: "POST",
      headers: {
        "Content-type": stringJSON,
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) =>{ 
       return res.json();
     })
      .catch((err) => {
        console.log(err.error);
        err
        // console.log(err.message);
      });
  }

  export function getName(){
    return fetch(`${regres}api/users`, {
      method: "GET"
    })
    .then((res) => {
      console.log(res);
        return res.json();
      })
    .catch((err) => {
        console.log(err.error);
        err
        // console.log(err.message);
      });
  }

