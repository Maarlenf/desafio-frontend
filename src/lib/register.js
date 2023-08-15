const stringJSON = "application/json";
const regres = "https://reqres.in/";

export function createUser(email, password) {
    return fetch(`${regres}api/register`, {
      method: "POST",
      headers: {
        "Content-type": stringJSON,
      },
      body: JSON.stringify({
        email: email,
        password: password
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        // console.log(err.message);
        return err;
      });
  }